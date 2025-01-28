import { AvatarWrapper, DefaultAvatar } from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/store";

const Avatar = () => {
  const user = useSelector((state: RootState) => state.user);
  const name = user.name;

  const firstLetter = name.charAt(0);

  /**
   * 使用 Unicode 範圍檢測 CJK 統一表意文字
   * 包含以下區段：
   * - 基本區：\u4E00-\u9FFF (CJK 統一漢字)
   * - 擴展區：
   *   - A 區：\u3400-\u4DBF
   *   - B 區：\u20000-\u2A6DF
   *   - C 區：\u2A700-\u2B73F
   *   - D 區：\u2B740-\u2B81F
   *   - E 區：\u2B820-\u2CEAF
   * - 相容區：\uF900-\uFAFF
   *
   * 此檢測可完整支援繁體中文、簡體中文及罕見漢字
   */
  const isCJKCharacter = /[\u4E00-\u9FFF\u3400-\u4DBF\u20000-\u2A6DF\u2A700-\u2B73F\u2B740-\u2B81F\u2B820-\u2CEAF\uF900-\uFAFF]/.test(
    firstLetter,
  );

  return (
    <AvatarWrapper>
      <DefaultAvatar $isDefault={isCJKCharacter}>{firstLetter}</DefaultAvatar>
    </AvatarWrapper>
  );
};

export default Avatar;
