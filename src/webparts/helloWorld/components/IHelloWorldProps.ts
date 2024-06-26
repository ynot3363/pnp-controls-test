import { DisplayMode } from "@microsoft/sp-core-library";

export interface IHelloWorldProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  displayMode: DisplayMode;
  title: string;
  updateProperty: (newValue: string) => void;
}
