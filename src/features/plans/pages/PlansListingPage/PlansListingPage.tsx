import { usePlans } from '../../hooks/usePlans';
import type { Plan } from '../../types/plan';
import { PlansTable } from '../../components/PlansTable';

const fallbackData: Plan[] = [];

export const PlansListingPage = () => {
  const { data } = usePlans();

  return <PlansTable data={data?.items ?? fallbackData} />;
};
