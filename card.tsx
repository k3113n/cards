import React from "react";

export default function Card({
  title,
  subtitle,
  bgColor,
  typeChar,
  typeColor,
  photo,
  left,
  center,
  right,
  jewelChar1,
  jewelColor1,
  data1,
  count1,
  jewelChar2,
  jewelColor2,
  data2,
  count2,
  startTitle,
  startCount,
  middleTitle,
  middleCount,
  endTitle,
  endCount,
  biography,
  attribution,
  logoURL,
  logoAlt,
  cardNumber,
  cardCount,
}:{
  title: string;
  subtitle: string;
  bgColor: string;
  typeChar: string;
  typeColor: string;
  photo: string;
  left: string;
  center: string;
  right: string;
  jewelChar1: string[];
  jewelColor1: string[];
  data1: string[];
  count1: string;
  jewelChar2: string[];
  jewelColor2: string[];
  data2: string[];
  count2: string;
  startTitle: string;
  startCount: string;
  middleTitle: string;
  middleCount: string;
  endTitle: string;
  endCount: string;
  biography: string;
  attribution: string;
  logoURL: string;
  logoAlt: string;
  cardNumber: string;
  cardCount: string;
}){
  const statCount = (data1[0] !== "" ? 1 : 0) + (data2[0] !== "" ? 1 : 0);
  return (
    <div style={{
       width: "750px",
       height: "1050px",
       backgroundColor: "goldenrod",
       borderRadius: "41px",
       border: "35px solid goldenrod",
       boxSizing: "border-box",
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       position: "relative",
       fontFamily: "'Noto Sans', 'Noto Color Emoji', sans-serif",
      }}>
        <Gradient color={brightenColor(bgColor)} />
      <p style={{
           position: "absolute",
           left: "45px",
           top: "-4px",
           fontSize: "20px",
           textAlign: "left",
       }}>
      {subtitle}
      </p>
      <p style={{
         position: "absolute",
         left: "45px",
         top: "-4px",
         fontSize: "40px",
         textAlign: "left",
       }}>
      {title}
      </p>
      <div style={{
               position: "absolute",
               right: "45px",
               top: "40px",
               display: "flex"
           }}>
          <Jewel size={40} character={typeChar} color={typeColor} />
      </div>
      <div style={{
         top: "90px",
         width: "575px",
         height: "409px",
         padding: "13px",
         background: `linear-gradient(
                  to bottom right,
                  #FFD700,
                  #FFA500,
                  #FFC700,
                  #FFD700,
                  #FFD300,
                  #FFA500
                )`,
         position: "absolute",
         display: "flex",
         boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
       }}>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
          src={photo} />
      </div>
      <Details items={[left, center, right]}/>
      <div style={{
             position: "absolute",
             top: "556px",
             width: "641px",
             height: "270px",
             display: "flex",
             flexDirection: "column",
             justifyContent: "center",
             alignItems: "center",
         }}>
          {data1[0] !== "" && <Move height={statCount > 1 ? "50%" : "100%"} chars={jewelChar1} colors={jewelColor1} title={data1[0]} data={data1.slice(1)} count={count1} />}
          {data2[0] !== "" && <Move height={statCount > 1 ? "50%" : "100%"}  chars={jewelChar2} colors={jewelColor2} title={data2[0]} data={data2.slice(1)} count={count2} />}
      </div>
      <div style={{
               position: "absolute",
               top: "826px",
               height: "50px",
               width: "610px",
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-between",
               alignItems: "flex-start",
           }}>
          <div style={{
                   height: "100%",
                   display: "flex",
                   flexDirection: "column",
                   justifyContent: "space-between",
                   alignItems: "center"
               }}>
              <span style={{
                     fontSize: "16px",
                 }}>
                  {startTitle}
              </span>
              <span style={{
                     fontSize: "22px",
                 }}>
                  {startCount}
              </span>
          </div>
          <div style={{
                   height: "100%",
                   display: "flex",
                   flexDirection: "column",
                   justifyContent: "space-between",
                   alignItems: "center"
               }}>
              <span style={{
                     fontSize: "16px",
                 }}>
                  {middleTitle}
              </span>
              <span style={{
                     fontSize: "22px"
                 }}>
                  {middleCount}
              </span>
          </div>
          <div style={{
                   height: "100%",
                   display: "flex",
                   flexDirection: "column",
                   justifyContent: "space-between",
                   alignItems: "center"
               }}>
              <span style={{
                     fontSize: "16px",
                 }}>
                  {endTitle}
              </span>
              <span style={{
                     fontSize: "22px"
                 }}>
                {endCount}
              </span>
          </div>
      </div>
      <div style={{
               position: "absolute",
               top: "888.5px",
               width: "610px",
               height: "61px",
               border: "4px solid goldenrod",
               boxShadow: `0px 1px 3px rgba(0, 0, 0, 0.2), inset 0px 1px 2px rgba(255, 255, 255, 0.4)`,
               display: "flex",
               justifyContent: "center",
               alignItems: "center"
        }}>
        <span style={{
               margin: "10px",
               fontSize: "18px",
               overflow: "hidden"
           }}>
          {biography}
        </span>
      </div>
      <footer style={{
          width: "100%",
          height: "14px",
          position: "absolute",
          bottom: "3px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "14px",
        }}>
          <p style={{
                 position: "absolute",
                 margin: "auto"
             }}>
            {attribution}
            <img style={{
                     position: "absolute",
                     height: "14px",
                     width: "14px",
                     marginLeft: "5px",
                     marginRight: "5px"
                 }} src={logoURL} alt={logoAlt} />
          </p>
          <p style={{
             position: "absolute",
             right: "5px",
          }}>
          {cardNumber}/{cardCount}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"16px"}
            height={"14px"}
            viewBox={"0 0 32 32"}
            style={{
                marginLeft: "5px",
            }}>
            <path
               mask="url(#lineMask)"
               d="m 22.388676,2.179635 c -1.563977,0 -2.963172,0.1949815 -4.199219,0.5878907 -0.275166,0.08371 -0.539947,0.1771464 -0.796875,0.2773436 H 27.501957 C 26.021687,2.4692426 24.318333,2.179635 22.388676,2.179635 Z m -6.888672,1.8652344 c -0.14173,0.099094 -0.280853,0.1998459 -0.414062,0.3066406 -0.262681,0.2169722 -0.503513,0.4494897 -0.728516,0.6933594 h 16.429687 c -0.413216,-0.368672 -0.852571,-0.700568 -1.318359,-1 z m -1.912109,2 c -0.157837,0.2482339 -0.3038,0.5057434 -0.431641,0.7753906 -0.03513,0.074089 -0.0672,0.1493451 -0.09961,0.2246094 h 17.212892 l 1.017577,-1 z M 12.716801,8.044869 c -0.0838,0.324004 -0.147937,0.656856 -0.187501,1 h 5.76172 c 0.09057,-0.386776 0.281569,-0.719131 0.566406,-1 z m 13.134766,0 c 0.508221,0.286676 0.968992,0.619523 1.380859,1 h 1.001953 l 1.017578,-1 z m -13.375,2 c 0.0018,0.345444 0.02559,0.676677 0.06055,1 h 6.003905 c -0.15433,-0.274181 -0.251312,-0.608359 -0.291018,-1 z m 0.224609,2.000001 c 0.08162,0.348161 0.184258,0.681682 0.310547,0.999999 H 25.32227 c -0.429476,-0.09661 -0.8719,-0.185508 -1.34375,-0.257812 L 21.367192,12.38276 C 20.817388,12.29761 20.34266,12.184251 19.94141,12.04487 Z m 0.810547,1.999999 c 0.219445,0.356537 0.474486,0.690057 0.763672,1.000001 h 15.51953 c -0.441599,-0.374041 -0.953733,-0.707292 -1.537108,-1.000001 z m 1.982422,2 c 0.627719,0.401016 1.36007,0.733782 2.197266,1 h 13.644531 c -0.1665,-0.358049 -0.36445,-0.691329 -0.59375,-1 z m 8.083984,2.000001 c 1.016248,0.184336 1.705743,0.495138 2.064453,0.93164 0.01925,0.02226 0.03635,0.04554 0.05469,0.06836 h 6.205077 c -0.04875,-0.34696 -0.113426,-0.683702 -0.201172,-1 z m 2.595703,1.999999 c 0.04899,0.218296 0.07422,0.451119 0.07422,0.699219 0,0.102646 -0.0054,0.202593 -0.01367,0.300781 H 31.97657 C 31.99037,20.836763 32,20.626136 32,20.412057 32,20.285825 31.9905,20.16781 31.98633,20.044869 Z M 14.29102,22.04487 13.273442,23.044869 h 5.070312 c -0.572301,-0.265796 -1.115299,-0.600296 -1.63086,-0.999999 z m 11.68164,0 c -0.170049,0.357705 -0.41789,0.673141 -0.746093,0.945312 -0.02331,0.01933 -0.05005,0.03602 -0.07422,0.05469 h 6.453125 c 0.103762,-0.323849 0.185237,-0.658433 0.248047,-0.999999 z m -13.714844,1.999999 -0.576172,0.566407 c 0.13627,0.147397 0.274793,0.292567 0.41797,0.433594 h 18.513671 c 0.222271,-0.315393 0.419647,-0.648826 0.589844,-1.000001 z m 0.988282,2 c 0.461346,0.359323 0.950352,0.693292 1.46875,1 h 13.808593 c 0.280321,-0.184559 0.545761,-0.381131 0.791016,-0.591797 0.156887,-0.130909 0.30392,-0.267988 0.447265,-0.408203 z m 3.591796,2.000001 c 1.400543,0.48312 3.02035,0.728515 4.869141,0.728515 1.639655,0 3.104129,-0.194981 4.390625,-0.587891 0.137586,-0.04465 0.271617,-0.09233 0.404297,-0.140624 z" />
            <path
               mask="url(#lineMask)"
               d="M 0 2.9203307 L 0 3.8720871 L 5.674131 3.8720871 L 5.674131 2.9203307 L 0 2.9203307 z M 14.882025 2.9203307 L 14.122738 3.8720871 L 20.506905 3.8720871 L 21.286713 2.9203307 L 14.882025 2.9203307 z M 0 4.8238436 L 0 5.7756 L 5.674131 5.7756 L 5.674131 4.8238436 L 0 4.8238436 z M 13.363451 4.8238436 L 12.604164 5.7756 L 18.94934 5.7756 L 19.729149 4.8238436 L 13.363451 4.8238436 z M 0 6.7273564 L 0 7.6791128 L 5.674131 7.6791128 L 5.674131 6.7273564 L 0 6.7273564 z M 11.846929 6.7273564 L 11.087642 7.6791128 L 17.391776 7.6791128 L 18.169532 6.7273564 L 11.846929 6.7273564 z M 0 8.6308692 L 0 9.5826257 L 5.674131 9.5826257 L 5.674131 8.6308692 L 0 8.6308692 z M 10.328355 8.6308692 L 9.5936935 9.5528833 L 9.5711201 9.5826257 L 15.832159 9.5826257 L 16.611968 8.6308692 L 10.328355 8.6308692 z M 0 10.534382 L 0 11.486139 L 5.674131 11.486139 L 5.674131 10.534382 L 0 10.534382 z M 8.8733969 10.534382 L 8.1756738 11.486139 L 14.274595 11.486139 L 15.052351 10.534382 L 8.8733969 10.534382 z M 0 12.437895 L 0 13.389651 L 5.674131 13.389651 L 5.674131 12.437895 L 0 12.437895 z M 7.4779506 12.437895 L 6.7802274 13.389651 L 13.400389 13.389651 L 13.104883 12.913773 L 13.494787 12.437895 L 7.4779506 12.437895 z M 0 14.341408 L 0 15.293164 L 14.586518 15.293164 L 13.993454 14.341408 L 6.0825043 14.341408 L 5.8978129 14.594218 L 5.674131 14.594218 L 5.674131 14.341408 L 0 14.341408 z M 0 16.244921 L 0 17.196677 L 8.8344065 17.196677 L 9.0724532 16.908548 L 9.246884 17.196677 L 15.772648 17.196677 L 15.179583 16.244921 L 0 16.244921 z M 0 18.148433 L 0 19.10019 L 7.258373 19.10019 L 8.0463898 18.148433 L 0 18.148433 z M 9.827636 18.148433 L 10.406336 19.10019 L 16.958777 19.10019 L 16.365712 18.148433 L 9.827636 18.148433 z M 0 20.051946 L 0 21.003703 L 5.6823395 21.003703 L 6.4703563 20.051946 L 0 20.051946 z M 10.985036 20.051946 L 11.563735 21.003703 L 18.142854 21.003703 L 17.551842 20.051946 L 10.985036 20.051946 z M 0 21.955459 L 0 22.907216 L 5.674131 22.907216 L 5.674131 21.955459 L 0 21.955459 z M 12.142435 21.955459 L 12.723187 22.907216 L 19.328984 22.907216 L 18.735919 21.955459 L 12.142435 21.955459 z M 0 23.858972 L 0 24.810728 L 5.674131 24.810728 L 5.674131 23.858972 L 0 23.858972 z M 13.301887 23.858972 L 13.880587 24.810728 L 20.515113 24.810728 L 19.922048 23.858972 L 13.301887 23.858972 z M 0 25.762485 L 0 26.714241 L 5.674131 26.714241 L 5.674131 25.762485 L 0 25.762485 z M 14.459286 25.762485 L 15.040038 26.714241 L 21.701243 26.714241 L 21.108178 25.762485 L 14.459286 25.762485 z M 0 27.665998 L 0 28.257128 L 5.674131 28.257128 L 5.674131 27.665998 L 0 27.665998 z M 15.618738 27.665998 L 15.97786 28.257128 L 22.661638 28.257128 L 22.294307 27.665998 L 15.618738 27.665998 z "
               transform="scale(0.95175642,1.050689)" />
          </svg>
        </p>
      </footer>
    </div>
  );
};

function Gradient({color}: {color: string}){
  function random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  function distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  const gradientCount = Math.floor(random(9, 12));
  const minDistance = 200;
  const placedGradients: Array<{ x: number; y: number; radius: number }> = [];

  for (let i = 0; i < gradientCount; i++) {
    let x, y;
    let validPosition = false;
    while (!validPosition) {
      x = random(0, 750);
      y = random(0, 1050);
      validPosition = true;
      for (const { x: px, y: py } of placedGradients) {
        if (distance(x, y, px, py) < minDistance) {
          validPosition = false;
          break;
        }
      }
    }
    const radius = random(200, 300);
    placedGradients.push({ x, y, radius });
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 680 980`}
      width={"100%"}
      height={"100%"}
      position={"absolute"}
    >
      <rect width={750} height={1050} fill={color} />
      {placedGradients.map(({ x, y, radius }, index) => (
        <circle
          key={index}
          cx={x}
          cy={y}
          r={radius}
          fill="url(#cloud-gradient)"
        />
      ))}
      <defs>
        <radialGradient id="cloud-gradient" cx="50%" cy="50%" r="50%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function Details({
    items,
}:{
  items: string[];
}){
  return (
    <div style={{
             position: "absolute",
             width: "540px",
             height: "30px",
             top: "530.88px",
             background: `linear-gradient(
                  to bottom right,
                  #FFD700,
                  #FFA500,
                  #FFC700,
                  #FFD700,
                  #FFD300,
                  #FFA500
                )`,
             boxShadow: `0px 1px 3px rgba(0, 0, 0, 0.2), inset 0px 1px 2px rgba(255, 255, 255, 0.4)`,
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             fontSize: "18px",
         }}>
      {items.map((item, index) => (
        <span style={{
                 margin: "5px",
                 overflow: "hidden"
              }}>
          {item}
        </span>
      ))}
    </div>
  );
}

function Move({
  chars,
  colors,
  title,
  data,
  count,
  height
}:{
  chars: string[];
  colors: string[];
  title: string;
  data: string[];
  count: string;
  height: string;
}){
  return (
    <div style={{
             height: height,
             width: "100%",
             borderBottom: "4px solid black",
             boxSizing: "border-box",
             display: "flex",
             flexDirection: "row",
             justifyContent: "center",
             alignItems: "center",
          }}>
      <div style={{
             width: "96.15px",
             display: "flex",
             justifyContent: "space-around",
             alignItems: "center",
             flexWrap: "wrap",
             gap: "10px",
           }}>
        {chars.map((char, index) => (
          <Jewel size={40} character={char} color={colors[index]} />
        ))}
      </div>
      <div style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center"
           }}>
        <div style={{
               width: "418.7px",
               marginLeft: "15px",
               marginRight: "15px",
               fontSize: "18px",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "flex-start",
               flexWrap: "wrap",
           }}>
          <span style={{
              fontSize: "22px",
            }}>
            {title}
          </span>
          <div style={{
                   display: '-webkit-box',
                   WebkitBoxOrient: 'vertical',
                   WebkitLineClamp: 5,
                   overflow: 'hidden',
                   textOverflow: 'ellipsis',
                   whiteSpace: 'normal',
                   wordBreak: 'break-word',
           }}>
              {data.map((text) => (
                  <span>
                    {text}
                  </span>
              ))}
          </div>
        </div>
      </div>
      <div style={{
             width: "96.15px",
             display: "flex",
             justifyContent: "center",
             alignItems: "center"
           }}>
        <span style={{
               fontSize: "24px",
           }}>
            {count}
        </span>
      </div>
    </div>
  );
}

function Jewel({
  size,
  character,
  color,
}:{
  size:number;
  character:string;
  color:string;
}){
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,
        fontSize: `${size-8}px`,
        borderRadius: "50%",
        background: `radial-gradient(circle at 40% 40%, white, ${brightenColor(color, "black", 2)} 60%, ${brightenColor(color, "black", 2)} 100%)`,
        boxShadow: `
          inset 0 0 10px rgba(255, 255, 255, 0.5),
          0 4px 10px rgba(0, 0, 0, 0.3)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <span>
            {character[0]}
        </span>
    </div>
  );
}

function brightenColor(color, text = "black", minContrast = 4.5) {
    function hexToRgb(hex) {
      hex = hex.replace("#", "");
      const bigint = parseInt(hex, 16);
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    }

    function rgbToHex(r, g, b) {
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }

    function relativeLuminance([r, g, b]: number[]) {
      const srgb = [r, g, b].map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
    }

    function contrastRatio(l1, l2) {
      return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    }

    const textRgb = text === "black" ? [0, 0, 0] : [255, 255, 255];
    const textLum = relativeLuminance(textRgb);

    let [r, g, b] = hexToRgb(color);
    let bgLum = relativeLuminance([r, g, b]);

    while (contrastRatio(bgLum, textLum) < minContrast) {
      r = Math.min(r + 10, 255);
      g = Math.min(g + 10, 255);
      b = Math.min(b + 10, 255);
      bgLum = relativeLuminance([r, g, b]);

      if (r === 255 && g === 255 && b === 255) break;
    }

    return rgbToHex(r, g, b);
  }