import TapToOpen from "../components/TapToOpen/TapToOpen";

type Props = {
  onOpen: () => void;
};

export default function IntroScreen({ onOpen }: Props) {
  return <TapToOpen onOpen={onOpen} />;
}