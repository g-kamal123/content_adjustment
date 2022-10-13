import React from "react";
import "./App.css";

function App() {
  const [aligning, setAligning] = React.useState("justify");
  const [bolding, setBold] = React.useState(400);
  const [brdr, setBrdr] = React.useState("none");
  const [tit, setTit] = React.useState("none");
  const [scalling, setScalling] = React.useState(100);
  const [fontsz, setFontsz] = React.useState(20);
  const [lineht, setLineht] = React.useState(100);
  const [ltrspac, setLtrspac] = React.useState(1);
  const [txtmag, setTxtmag] = React.useState("off");
  const [details, setDetails] = React.useState("");

  const magnifyhandler = (e) => {
    if (txtmag == "on") {
      setDetails(e.target.textContent);
    }
  };
  const magnifyhandler2 = (e) => {
    setDetails("");
  };

  const textMagnifire = () => {
    if (txtmag === "off") {
      setTxtmag("on");
    } else {
      setTxtmag("off");
    }
  };
  const readable = () => {
    if (bolding === "bolder") {
      setBold(400);
    } else {
      setBold("bolder");
    }
  };
  const links = () => {
    if (brdr == "none") {
      setBrdr("3px solid red");
    } else {
      setBrdr("none");
    }
  };
  const titles = () => {
    if (tit == "none") {
      setTit("3px solid orange");
    } else {
      setTit("none");
    }
  };
  const scaleup = () => {
    setScalling(Number(scalling) + 10);
  };
  const scaledown = () => {
    setScalling(Number(scalling) - 10);
  };
  const scaledefault = () => {
    setScalling(100);
  };
  const fontup = () => {
    setFontsz(Number(fontsz) + 3);
  };
  const fontdown = () => {
    setFontsz(Number(fontsz) - 3);
  };
  const fontdefault = () => {
    setFontsz(20);
  };
  const lihtup = () => {
    setLineht(Number(lineht) + 10);
  };
  const lihtdown = () => {
    setLineht(Number(lineht) - 10);
  };
  const lihtdefault = () => {
    setLineht(100);
  };
  const ltrspacup = () => {
    setLtrspac(Number(ltrspac) + 1);
  };
  const ltrspacdown = () => {
    setLtrspac(Number(ltrspac) - 1);
  };
  const ltrspacdefault = () => {
    setLtrspac(1);
  };
  return (
    <div className="App" style={{ textAlign: aligning, fontWeight: bolding }}>
      <div className="leftpart">
        <h2>Adjustments</h2>
        <div className="row">
          <div className="colorss">
            <div className="arrowbox">
              <p>
                <i
                  class="fa-solid fa-scale-balanced"
                  style={{ fontSize: "20px", marginRight: "10px" }}
                ></i>
                <span>Content Scaling</span>
              </p>
              <div className="arrowss">
                <div className="arrow" onClick={scaleup}>
                  <i
                    class="fa fa-angle-up"
                    style={{ color: "white" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <p className="default" onClick={scaledefault}>
                  Default
                </p>
                <div className="arrow" onClick={scaledown}>
                  <i
                    class="fa fa-angle-down"
                    style={{ color: "white" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="bottombox" onClick={titles}>
                <i
                  class="fa-solid fa-highlighter"
                  style={{ fontSize: "20px" }}
                ></i>
                <p>Highlight-titles</p>
              </div>

              <div className="bottombox" onClick={links}>
                <i class="fa-solid fa-fill" style={{ fontSize: "20px" }}></i>

                <p>Highlight Links</p>
              </div>
            </div>
            <div className="arrowbox">
              <p>
                <i
                  style={{ fontSize: "20px" }}
                  class="fa-solid fa-arrows-up-down"
                ></i>

                <i
                  style={{ fontSize: "18px", marginRight: "10px" }}
                  class="fa-solid fa-font"
                ></i>
                <span>Adjust Font Sizing</span>
              </p>
              <div className="arrowss">
                <div className="arrow" onClick={fontup}>
                  <i
                    class="fa fa-angle-up"
                    style={{ color: "white" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <p className="default" onClick={fontdefault}>
                  Default
                </p>
                <div className="arrow" onClick={fontdown}>
                  <i
                    class="fa fa-angle-down"
                    style={{ color: "white" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>

            <div className="arrowbox">
              <p>
                <i
                  style={{ fontSize: "20px" }}
                  class="fa-solid fa-line-height"
                ></i>
                <i
                  style={{ fontSize: "18px", marginRight: "10px" }}
                  class="fa-solid fa-font"
                ></i>
                <span>Adjust Line Height</span>
              </p>
              <div className="arrowss">
                <div className="arrow" onClick={lihtup}>
                  <i
                    class="fa fa-angle-up"
                    style={{ color: "white" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <p className="default" onClick={lihtdefault}>
                  Default
                </p>
                <div className="arrow" onClick={lihtdown}>
                  <i
                    class="fa fa-angle-down"
                    style={{ color: "white" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>

            <div className="arrowbox">
              <p>
                <i
                  style={{ fontSize: "20px" }}
                  class="fa-solid fa-line-height"
                ></i>
                <i
                  style={{ fontSize: "18px", marginRight: "10px" }}
                  class="fa-solid fa-font"
                ></i>
                <span>Adjust Letter Spacing</span>
              </p>
              <div className="arrowss">
                <div className="arrow" onClick={ltrspacup}>
                  <i
                    class="fa fa-angle-up"
                    style={{ color: "white" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <p className="default" onClick={ltrspacdefault}>
                  Default
                </p>
                <div className="arrow" onClick={ltrspacdown}>
                  <i
                    class="fa fa-angle-down"
                    style={{ color: "white" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="colorss">
            <div className="bottombox" onClick={readable}>
              <i class="fa-solid fa-font" style={{ fontSize: "20px" }}></i>
              <p>Readable font</p>
            </div>

            <div className="bottombox" onClick={textMagnifire}>
              <i
                class="fa-solid fa-magnifying-glass"
                style={{ fontSize: "20px" }}
              ></i>

              <p>Text Magnifire</p>
            </div>

            <div
              className="bottombox"
              onClick={() => {
                setAligning("center");
              }}
            >
              <i
                class="fa-solid fa-align-center"
                style={{ fontSize: "20px" }}
              ></i>
              <p>Align Center</p>
            </div>

            <div
              className="bottombox"
              onClick={() => {
                setAligning("left");
              }}
            >
              <i
                class="fa-solid fa-align-left"
                style={{ fontSize: "20px" }}
              ></i>

              <p>Align Left</p>
            </div>

            <div
              className="bottombox"
              onClick={() => {
                setAligning("right");
              }}
            >
              <i
                class="fa-solid fa-align-right"
                style={{ fontSize: "20px" }}
              ></i>
              <p>Align Right</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rightpart">
        <div className="magnifire">{details}</div>
        <header
          className="App-header"
          style={{ lineHeight: `${lineht}%`, zoom: `${scalling}%` }}
        >
          <h1
            style={{ border: tit, fontSize: 24 + fontsz }}
            onMouseOver={magnifyhandler}
            onMouseOut={magnifyhandler2}
          >
            Lorem ipsum
          </h1>
          <p style={{ fontSize: fontsz, letterSpacing: `${ltrspac}px` }}>
            <p onMouseOver={magnifyhandler} onMouseOut={magnifyhandler2}>
              Lorem ipsum dolor sit amet. Ut rerum suscipit rem rerum nesciunt
              et
            </p>

            <p onMouseOver={magnifyhandler} onMouseOut={magnifyhandler2}>
              soluta quibusdam eum repellendus expedita. In dolores Quis aut
            </p>
            <p onMouseOver={magnifyhandler} onMouseOut={magnifyhandler2}>
              voluptas itaque est natus consequatur ut voluptate excepturi aut
            </p>
            <p onMouseOver={magnifyhandler} onMouseOut={magnifyhandler2}>
              dolorem dolorum sed voluptas sint. Qui numquam ipsum est quisquam
              voluptatem vel voluptatem internos sed reprehenderit enim 33 esse
            </p>
            <p onMouseOver={magnifyhandler} onMouseOut={magnifyhandler2}>
              molestiae a animi sunt. Sed cupiditate laborum ea consequuntur
              debitis et dolore quis quo reiciendis excepturi.
            </p>
            <br />
            <p onMouseOver={magnifyhandler} onMouseOut={magnifyhandler2}>
              {" "}
              Vel esse expedita non dolore adipisci qui officiis magnam At
              voluptate temporibus At minima quasi eum rerum placeat id
              laudantium
            </p>
            <p onMouseOver={magnifyhandler} onMouseOut={magnifyhandler2}>
              omnis. Aut delectus iusto ea deserunt assumenda quo odit
              recusandae non itaque voluptatum. Ex consequuntur cupiditate est
              corporis sequi
            </p>
            <p onMouseOver={magnifyhandler} onMouseOut={magnifyhandler2}>
              est laboriosam nobis. Non odit officia ut error quia et incidunt
            </p>
            <p onMouseOver={magnifyhandler} onMouseOut={magnifyhandler2}>
              sint et quisquam veritatis et asperiores voluptate ex
              exercitationem assumenda?
            </p>
            <br />
            <p onMouseOver={magnifyhandler} onMouseOut={magnifyhandler2}>
              In ducimus quaerat est quidem repellat sit quam deleniti? Qui
              similique autem ut repellat fugiat nam numquam corrupti non
              quaerat soluta.
            </p>
          </p>
          <button
            style={{ border: brdr,cursor:'pointer' }}
            onClick={() => {
              alert("you have clicked a link");
            }}
          >
            Click me
          </button>
        </header>
      </div>
    </div>
  );
}

export default App;
