import Document, { Head, Html, Main, NextScript } from 'next/document';
import Header from '../components/Header';

export default class extends Document {
  render() {
    /**
    * Here we use _document.js to add a "lang" propery to the HTML object if
    * one is set on the page.
    **/
    return (
      <Html lang={this.props.__NEXT_DATA__.props.pageProps.lang || 'en'}>
        <Head />
        <Header />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};
