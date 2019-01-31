// import * as React from 'react';
// import Helmet from 'react-helmet';
//
// import './index.scss';
// // @ts-ignore
// import favicon from './jetbrains_favicon.ico';
//
// import Navbar from '../components/navbar/Navbar';
// import { NAVBAR } from '../components/navbar/constants';
// import Footer from '../components/Footer';
//
// interface LogoLayoutProps extends React.HTMLProps<HTMLDivElement> {
//   title: string;
//   subtitle?: string;
//   logo: any;
// }
//
// class LogoLayout extends React.PureComponent<LogoLayoutProps, {}> {
//   public render() {
//     const { title, subtitle, logo } = this.props;
//
//     return (
//       <div>
//         <Helmet
//           title={`${title} - PyCharm Guide`}
//           meta={[{ name: 'description', content: 'template' }, { name: 'keywords', content: 'template, something' }]}
//         >
//           <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
//           <meta charSet="utf-8" />
//           <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//           <meta name="viewport" content="width=device-width, initial-scale=1" />
//           <html lang="en" />
//           <body className="layout-default" />
//           <link rel="shortcut icon" href={favicon} />
//         </Helmet>
//         <Navbar {...NAVBAR} />
//
//         <main className="bd-main bulmaio-body">
//           <div className="bd-main-container container">
//             <header className="bd-header">
//               <article className="media">
//                 <figure className="media-left">
//                   <div className="image is-rounded is-96x96">
//                     <img className="bio-resourcecard-logo" src={logo} alt="Logo" />
//                   </div>
//                 </figure>
//                 <div className="media-content">
//                   <div className="content">
//                     <div className="bd-header-titles">
//                       <h1 className="title">{title}</h1>
//                       {subtitle && <p className="subtitle is-4">{subtitle}</p>}
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             </header>
//
//             {this.props.children}
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }
// }
//
// export default LogoLayout;
