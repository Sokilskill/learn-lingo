export interface MainNavProps {
  isLoggedIn: boolean;
  onCloseMenu?: () => void;
}

export interface NavItem {
  title: string;
  to: string;
  secure: boolean;
}
