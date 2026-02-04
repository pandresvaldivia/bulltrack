import { BullsRanking } from '@/ui/bulls-ranking/components/bulls-raking';
import { CloudSyncIcon } from '@/ui/shared/components/icon';

export default async function DashboardPage() {
  return (
    <div>
      <div className='flex items-center gap-2 mb-5.5 text-small text-sm'>
        <CloudSyncIcon
          height={16}
          width={16}
          className='text-gray-dark size-4'
        />
        <p>Datos actualizados hace 2 min</p>
      </div>

      <h1 className='text-title-big font-semibold leading-5 mb-3.5'>
        Resultados de la clasificación
      </h1>
      <p className='leading-tight'>
        Los resultados están ordenados por Bulltrack Score que reflejan tus
        objetivos de producción
      </p>
      <BullsRanking />
    </div>
  );
}
