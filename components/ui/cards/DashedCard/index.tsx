import { MdAdd } from "react-icons/md";
import { SecondaryIconButton } from "@/components/ui/buttons";
import { YellowDashedCard } from "./styled";

const DashedCard: React.FC = () => {
  return (
    <YellowDashedCard>
      <SecondaryIconButton>
        <MdAdd size={27} />
        新增輔具
      </SecondaryIconButton>
    </YellowDashedCard>
  );
};

export default DashedCard;
