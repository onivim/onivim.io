import * as React from "react";

import Link from "gatsby-link";
import { Segment, Icon, Container, Sidebar, Button } from "semantic-ui-react";

import "prismjs/themes/prism-okaidia.css";

// import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
// import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import "../css/styles.css";
import "../css/responsive.css";
// import "../css/semantic.min.css";

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render(): JSX.Element {
    return this.props.children();
  }
}

// export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
//   render() {
//     const { pathname } = this.props.location;
//     const isHome = pathname === "/";

//     return (
//       <Sidebar.Pushable as={Segment}>
//         <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} />
//         <Sidebar.Pusher style={{ minHeight: "100vh" }}>
//           {/* Header */}
//           {isHome ? null : <HeaderMenu
//             Link={Link} pathname={pathname} items={menuItems}
//           />}

//           {/* Render children pages */}
//           <div style={{ paddingBottom: 60 }}>
//             {this.props.children()}
//           </div>

//           {/* Footer */}
//           <Segment inverted vertical style={{ position: "absolute", bottom: 0, width: "100%" }}>
//             <Container textAlign="center">
//               <p>Powered with <Icon name="heart" /> by Gatsby 1.0</p>
//             </Container>
//           </Segment>
//         </Sidebar.Pusher>
//       </Sidebar.Pushable>
//     );
//   }
// }
