import type { NextApiRequest, NextApiResponse } from "next"
import { rewards, ShellScriptReward } from "../../lib/rewards"
import open from "open"

interface Request {
  rewardId?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rewardId } = JSON.parse(req.body) as Request
  const reward = rewards.find((r): r is ShellScriptReward => r.id === rewardId)
  if (!reward) return res.status(400).end()

  const { script } = reward
  if (!script) return res.status(400).end()

  try {
    await open(script, { background: true })
  } catch (error) {
    console.error(error)
    res.status(500).end()
  }

  console.log(`${reward.script} executed`)
  res.status(200).end()
}
