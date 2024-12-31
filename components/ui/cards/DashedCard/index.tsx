import { MdAdd } from "react-icons/md";
import { SecondaryIconButton } from "@/components/ui/buttons";
import { YellowDashedCard } from "./styled";

const DashedCard: React.FC<{ id: string }> = ({ id }) => {
  return (
    <YellowDashedCard key={id}>
      <SecondaryIconButton>
        <MdAdd size={27} />
        新增輔具
      </SecondaryIconButton>
    </YellowDashedCard>
  );
};

export default DashedCard;
