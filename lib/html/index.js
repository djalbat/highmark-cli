"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createIndexHTML;
    }
});
function createIndexHTML(client) {
    const indexHTML = `<!DOCTYPE html>
<html>
  <head>
    <title>Highmark</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width">

    <link rel="preload" href="font/STIXTwoMath-Regular.woff2" as="font" type="font/woff2" crossorigin >
    <link rel="preload" href="font/STIXTwoText-Regular.woff2" as="font" type="font/woff2" crossorigin >
    <link rel="preload" href="font/STIXTwoText-Bold.woff2" as="font" type="font/woff2" crossorigin >
    <link rel="preload" href="font/STIXTwoText-Italic.woff2" as="font" type="font/woff2" crossorigin >
    <link rel="preload" href="font/STIXTwoText-BoldItalic.woff2" as="font" type="font/woff2" crossorigin >
    <link rel="preload" href="font/Inconsolata-Regular.woff2" as="font" type="font/woff2" crossorigin >
    <link rel="preload" href="font/Inconsolata-Bold.woff2" as="font" type="font/woff2" crossorigin >

    <style>

        *,
        *::after,
        *::before {
          border: 0;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          -webkit-text-size-adjust: none;
          -moz-text-size-adjust: none;
          -ms-text-size-adjust: none;
          text-size-adjust: none;
        }

    </style>
    <style>

      html,
      body {
        width: 100%;
        height: 100%;
      }

    </style>
    <style>

{fontCSS}

    </style>
    <style>

{documentCSS}

    </style>
    <style>

{loadingCSS}

    </style>
    <style>

{highmarkCSS}

    </style>

  </head>
  <body>
  
{loadingHTML}

  <div class="document">

{highmarkHTML}

  </div>

{viewModeHTML}

{clientHTML}

{liveReloadHTML}

  </body>
</html>`;
    return indexHTML;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJbmRleEhUTUwoY2xpZW50KSB7XG4gIGNvbnN0IGluZGV4SFRNTCA9IGA8IURPQ1RZUEUgaHRtbD5cbjxodG1sPlxuICA8aGVhZD5cbiAgICA8dGl0bGU+SGlnaG1hcms8L3RpdGxlPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiPlxuXG4gICAgPGxpbmsgcmVsPVwicHJlbG9hZFwiIGhyZWY9XCJmb250L1NUSVhUd29NYXRoLVJlZ3VsYXIud29mZjJcIiBhcz1cImZvbnRcIiB0eXBlPVwiZm9udC93b2ZmMlwiIGNyb3Nzb3JpZ2luID5cbiAgICA8bGluayByZWw9XCJwcmVsb2FkXCIgaHJlZj1cImZvbnQvU1RJWFR3b1RleHQtUmVndWxhci53b2ZmMlwiIGFzPVwiZm9udFwiIHR5cGU9XCJmb250L3dvZmYyXCIgY3Jvc3NvcmlnaW4gPlxuICAgIDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwiZm9udC9TVElYVHdvVGV4dC1Cb2xkLndvZmYyXCIgYXM9XCJmb250XCIgdHlwZT1cImZvbnQvd29mZjJcIiBjcm9zc29yaWdpbiA+XG4gICAgPGxpbmsgcmVsPVwicHJlbG9hZFwiIGhyZWY9XCJmb250L1NUSVhUd29UZXh0LUl0YWxpYy53b2ZmMlwiIGFzPVwiZm9udFwiIHR5cGU9XCJmb250L3dvZmYyXCIgY3Jvc3NvcmlnaW4gPlxuICAgIDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwiZm9udC9TVElYVHdvVGV4dC1Cb2xkSXRhbGljLndvZmYyXCIgYXM9XCJmb250XCIgdHlwZT1cImZvbnQvd29mZjJcIiBjcm9zc29yaWdpbiA+XG4gICAgPGxpbmsgcmVsPVwicHJlbG9hZFwiIGhyZWY9XCJmb250L0luY29uc29sYXRhLVJlZ3VsYXIud29mZjJcIiBhcz1cImZvbnRcIiB0eXBlPVwiZm9udC93b2ZmMlwiIGNyb3Nzb3JpZ2luID5cbiAgICA8bGluayByZWw9XCJwcmVsb2FkXCIgaHJlZj1cImZvbnQvSW5jb25zb2xhdGEtQm9sZC53b2ZmMlwiIGFzPVwiZm9udFwiIHR5cGU9XCJmb250L3dvZmYyXCIgY3Jvc3NvcmlnaW4gPlxuXG4gICAgPHN0eWxlPlxuXG4gICAgICAgICosXG4gICAgICAgICo6OmFmdGVyLFxuICAgICAgICAqOjpiZWZvcmUge1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICAgICAgICAgIC1tb3otdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgICAgICAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgICAgICAgICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICAgICAgICB9XG5cbiAgICA8L3N0eWxlPlxuICAgIDxzdHlsZT5cblxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgPC9zdHlsZT5cbiAgICA8c3R5bGU+XG5cbntmb250Q1NTfVxuXG4gICAgPC9zdHlsZT5cbiAgICA8c3R5bGU+XG5cbntkb2N1bWVudENTU31cblxuICAgIDwvc3R5bGU+XG4gICAgPHN0eWxlPlxuXG57bG9hZGluZ0NTU31cblxuICAgIDwvc3R5bGU+XG4gICAgPHN0eWxlPlxuXG57aGlnaG1hcmtDU1N9XG5cbiAgICA8L3N0eWxlPlxuXG4gIDwvaGVhZD5cbiAgPGJvZHk+XG4gIFxue2xvYWRpbmdIVE1MfVxuXG4gIDxkaXYgY2xhc3M9XCJkb2N1bWVudFwiPlxuXG57aGlnaG1hcmtIVE1MfVxuXG4gIDwvZGl2PlxuXG57dmlld01vZGVIVE1MfVxuXG57Y2xpZW50SFRNTH1cblxue2xpdmVSZWxvYWRIVE1MfVxuXG4gIDwvYm9keT5cbjwvaHRtbD5gO1xuXG4gIHJldHVybiBpbmRleEhUTUw7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUluZGV4SFRNTCIsImNsaWVudCIsImluZGV4SFRNTCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUF3QkE7OztBQUFULFNBQVNBLGdCQUFnQkMsTUFBTTtJQUM1QyxNQUFNQyxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbUZkLENBQUM7SUFFTixPQUFPQTtBQUNUIn0=