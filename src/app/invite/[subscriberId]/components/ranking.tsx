import { getRanking } from '@/http/api'
import Image from 'next/image'
import cooper from '../../../../assets/medal-cooper.svg'
import gold from '../../../../assets/medal-gold.svg'
import silver from '../../../../assets/medal-silver.svg'

interface RankingProps {
  subscriberId: string
}

export default async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((user, index) => {
          const rankingPosition = index + 1
          if (rankingPosition < 4) {
            return (
              <div
                key={user.id}
                className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
              >
                <span className="text-sm text-gray-300 leading-none">
                  <span className="font-semibold">{rankingPosition}°</span> |{' '}
                  {user.name}
                </span>
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                  {user.score}
                </span>

                <Image
                  className="absolute top-0 right-8"
                  src={index === 0 ? gold : index === 1 ? silver : cooper}
                  alt="Medalha"
                />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
