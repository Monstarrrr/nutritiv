import styled from '@emotion/styled';
import React from 'react'
import { tokens } from '../../Helpers/styleTokens';
import { motion } from 'framer-motion';

const Count = styled.span`
  color: ${props => props.textColor};
  font-size: ${tokens.font.fontSize.xs};
  left: -1px;
  position: absolute;
  top: 4px;
  text-align: center;
  width: 100%;
`

const defaultViewBoxes = [
  {
    cart:         [{default: "0 0 24 24"},    {filled: "1 0 19 19"}],
    shop:         [{default: "1 0 24 24"},    {filled: "1 0 19 19"}],
    chat:         [{default: "0 -1 26 26"},   {filled: "0 -1 22 22"}],
    menu:         [{default: "0 0 22 22"}],
    close:        [{default: "0 0 24 24"}],
    search:       [{default: "0 -2 28 28"},   {filled: "1 1 18 18"}],
    home:         [{default: "0 0 25 25"},    {filled: "0 0 21 21"}],
    user:         [{default: "0 -1 27 27"},   {filled: "0 -1 22 22"}],
    users:        [{default: "-1 -1 27 27"},  {filled: "-1 -1 23 23"}],
    tag:          [{default: "0 -2 27 27"},   {filled: "0 -2 23 23"}],
    login:        [{default: "0 -1 26 26"}],
    exit:         [{default: "0 0 23 23"}],
    counter:      [{default: "0 0 100 100"},  {filled: "0 0 100 100"}],
    wave:         [{default: "0 0 100 100"},  {filled: "0 0 100 100"}],
    arrowDown:    [{default: "0 0 100 100"}],
    arrowsUp:     [{default: "0 0 200 200"},  {filled: "0 0 200 200"}],
    chevronLeft:  [{default: "0 0 25 25"},    {filled: "0 0 25 25"}],
    chevronRight: [{default: "0 0 25 25"},    {filled: "0 0 25 25"}],
    beaker:       [{default: "0 0 24 24"},    {filled: "0 0 24 24"}],
    star:         [{default: "0 0 24 24"},    {filled: "0 0 24 24"}],
    brain:        [{default: "0 0 200 200"},  {filled: "0 0 200 200"}],
    armor:        [{default: "0 0 200 200"},  {filled: "0 0 200 200"}],
    plusSign:     [{default: "0 0 200 200"},  {filled: "0 0 200 200"}],
    quote:        [{default: "70 70 60 60"},  {filled: "70 70 60 60"}],
    microscope:   [{default: "0 0 500 500"},  {filled: "0 0 500 500"}],
    github:       [{default: "0 0 17 17"},    {filled: "0 0 17 17"}],
  },
]

const ConditionalClipPath = ({ condition, wrapper, children }) => (
  condition ? wrapper(children) : children
)

export const Icon = (props) => {
  const { 
    name, // required
    color, // required
    strokeWidth, // required if != filled
    initial,
    animate,
    transition,
    layoutId,
    count,
    filled,
    height,
    hovered,
    isClipPath,
    resizeDefault,
    resizeFilled,
    style,
    textColor,
    width, 
  } = props;
  
  const pathVariant = {
    notHovered: {
      pathLength: 0,
    },
    hovered: {
      pathLength: 1,
      transition: {
        ease: "easeInOut",
      }
    }
  }
  
  return (
    <>
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill={filled ? color : "none"}
        animate={animate}
        initial={initial}
        transition={transition}
        layoutId={layoutId}
        viewBox={
          (resizeDefault && !filled) ? resizeDefault : (
            (resizeFilled && filled) ? resizeFilled : (
              filled ? (
                defaultViewBoxes[0][`${name}`][1].filled
              ) : (
                defaultViewBoxes[0][`${name}`][0].default
              )
            )
          )
        }
        stroke={color || tokens.color.contrastLight} 
        strokeWidth={strokeWidth ? strokeWidth : 0}
        height={height || "100%"}
        width={width || "100%"}
        style={style}
      >
        {name === "cart" && (
          filled ? (
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          )
        )}
        {name === "shop" && (
          filled ? (
            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
          ) : (
            <path strokeLinecap="round"  strokeLinejoin="round"  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          )
        )}
        {name === "chat" && (
          filled ? (
            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          )
        )}
        {name === "menu" && (
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />    
        )}
        {name === "close" && (
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        )}
        {name === "search" && (
          filled ? (
            <>
              <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
            </>
          ) : (
            <g transform="scale(-1,1) translate(-24, 0)">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          ) 
        )}
        {name === "home" && (
          filled ? (
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          )
        )}
        {name === "user" && (
          filled ? (
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          )
        )}
        {name === "users" && (
          filled ? (
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />  
          )
        )}
        {name === "tag" && (
          filled ? (
            <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          )
        )}
        {name === "login" && (
          <g transform="scale(-1,1) translate(-23, 0)">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </g>
        )}
        {name === "exit" && (
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        )}
        {name === "counter" && (
          <circle cx="50" cy="50" r="50" />
        )}
        {name === "arrowDown" && (
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        )}
        {name === "wave" && (
          <>
            <motion.path
              variants={pathVariant}
              animate={hovered ? "hovered" : "notHovered"}
              d="M16.5137234,24.1536064c5.3276005,0,10.6513004-1.8349991,16.0449009-5.5030003
              c9.075695-6.1742992,20.5312004-6.1722994,29.8934975,0.0079002c0.4623985,0.3031998,1.0820999,0.1742992,1.3842964-0.291399
              c0.3027039-0.465601,0.1734085-1.0907001-0.2885933-1.3959007c-10.0488052-6.6311007-22.3515053-6.6281004-32.1084023,0.0079002
              c-10.035099,6.8260002-19.8099995,6.8269997-29.8813-0.0010014c-0.4585-0.3111-1.0796-0.1869984-1.3881999,0.2747002
              c-0.3081,0.4616013-0.186,1.0876999,0.272,1.3987999C5.854023,22.3196068,11.185523,24.1536064,16.5137234,24.1536064z"
            />
            <motion.path
              variants={pathVariant}
              animate={hovered ? "hovered" : "notHovered"}
              d="M63.5478249,30.8939056c-10.0498047-6.6310997-22.3525047-6.6280994-32.1084023,0.0079002
              c-10.0361004,6.8279991-19.8110008,6.8269997-29.8813-0.0009995c-0.4585-0.3111-1.0796-0.1879997-1.3877,0.2747002
              c-0.3086,0.4617004-0.1865,1.0877991,0.2715,1.3987999c5.4116001,3.6679993,10.7426996,5.5029984,16.0708008,5.5029984
              c5.3275986-0.0009995,10.6513996-1.8349991,16.0459003-5.5038986c9.0746956-6.1753006,20.5302963-6.1714001,29.8934975,0.0078011
              c0.4623985,0.3031998,1.0825996,0.1742973,1.3848-0.2914009C64.139122,31.8242073,64.0098267,31.1991062,63.5478249,30.8939056z"
            />
            <motion.path
              variants={pathVariant}
              animate={hovered ? "hovered" : "notHovered"}
              d="M63.5478249,44.8166046c-10.0498047-6.629097-22.3520012-6.6260986-32.1084023,0.0079002
              c-10.0340996,6.8280029-19.8080997,6.8300018-29.8813-0.0009995c-0.4585-0.3110008-1.0796-0.1870003-1.3877,0.2747002
              c-0.3086,0.4617004-0.1865,1.0877991,0.2715,1.3988991c5.4120998,3.6689034,10.7440996,5.5039024,16.0718002,5.502903
              c5.3276005,0,10.6513004-1.8350029,16.0444012-5.5039024c9.0761948-6.1733971,20.5307961-6.1713982,29.8939972,0.0078011
              c0.4623985,0.3031998,1.0825996,0.1743011,1.3848-0.2912979C64.139122,45.7469063,64.0098267,45.1218071,63.5478249,44.8166046z"
            />
          </>
        )}
        {name === "beaker" && (
          filled ? (
            <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clipRule="evenodd" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />          
          )
        )}
        {name === "star" && (
          filled ? (
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />            
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />            
          )
        )}
        {name === "brain" && (
          <g>
            <ConditionalClipPath
              condition={isClipPath}
              wrapper={children => (
                <clipPath id="svg-path-brain">{children}</clipPath>
              )}
            >
              <path d="M117.91,29.11a59.55,59.55,0,0,1,6.66,2.58,17.32,17.32,0,0,1,7.37,7.79,3.17,3.17,0,0,0,2,1.77,15.62,15.62,0,0,1,10.7,14.83,3,3,0,0,0,1.73,3.06c7.19,4.3,10.64,14.11,7.83,22a1.52,1.52,0,0,0,.43,1.9c5.69,5.52,7.07,12.15,4.78,19.61-.43,1.4-1.25,2.69-1.76,4.07a2.35,2.35,0,0,0,0,1.75,18.21,18.21,0,0,1-2.12,22.21,2,2,0,0,0-.42,1.38,19.28,19.28,0,0,1-14.38,20.63,9.33,9.33,0,0,1-2.71.41,2.39,2.39,0,0,0-2.29,1.3c-5,7-11.87,10.2-20.46,9-6.13-.88-10.79-4.31-14.23-9.41-.32-.46-.6-.95-1-1.61l-.92,1.38c-4.4,6.53-10.44,10.17-18.42,9.88a20.15,20.15,0,0,1-16.34-9.09,3,3,0,0,0-2.48-1.44c-6.93-.68-11.83-4.4-15-10.47a18.6,18.6,0,0,1-2-10.68,2,2,0,0,0-.49-1.35c-5.17-5.83-6.41-13.48-2.92-20.35a5.07,5.07,0,0,0,.1-5.17c-3.12-6.73-2.88-13.4,1.6-19.6A18.73,18.73,0,0,1,45.48,83a1.26,1.26,0,0,0,.42-1.56,19.14,19.14,0,0,1,8.41-22.7c.69-.42,1.12-.79,1.06-1.72A15.89,15.89,0,0,1,66.68,41a1.91,1.91,0,0,0,1-.84c3-5.89,7.63-9.69,14.23-10.9.08,0,.14-.1.21-.15h4.47a7,7,0,0,0,.84.29A17.91,17.91,0,0,1,97,34.59C98.07,35.73,99,37,100,38.28c.07,0,.17-.05.22-.11.16-.21.3-.43.44-.65a18.2,18.2,0,0,1,7.83-6.76,48.14,48.14,0,0,1,4.92-1.65Zm8.43,11.5c-2.35-4-7.38-6.65-11.43-6.18a14,14,0,0,0-12,11.81,32.45,32.45,0,0,0-.24,4.18c0,6.08,0,12.16,0,18.07,1.74-.34,3.42-.8,5.12-1a2.5,2.5,0,0,1,2.75,2.4,2.62,2.62,0,0,1-2.5,2.81c-3.71.48-5.37,2.38-5.37,6.15q0,23.79,0,47.57v1.38l1.13-1.07a20.79,20.79,0,0,1,14-5.91c2-.06,3.14.9,3.21,2.49s-1,2.62-3,2.77a20.07,20.07,0,0,0-3,.4A15.81,15.81,0,0,0,104,148.3c3.43,8.22,12.1,12.09,20.17,8.95a15.45,15.45,0,0,0,8.26-7.51c1-1.86,1.73-2.16,3.84-1.93a7.15,7.15,0,0,0,2,0A13.83,13.83,0,0,0,149.68,132a4.48,4.48,0,0,1,1.54-4.5c4.43-4.16,5.27-11.21,2-15.86-.36.23-.73.46-1.08.71a16.82,16.82,0,0,1-9.78,3.27,2.62,2.62,0,0,1-2.88-2.58,2.66,2.66,0,0,1,2.66-2.68,15.83,15.83,0,0,0,2.84-.43A13.46,13.46,0,0,0,154.91,99c1.09-5.42-.84-9.89-5.29-13.22-1.88-1.4-2.2-2.36-1.22-4.34,2.73-5.55,1.8-10.67-2-15.25-3.28-3.93-7.55-5.57-12.67-4.19-5.53,1.5-9.55,6.84-10,13.12C123.57,76.94,122.59,78,121,78s-2.59-1.21-2.58-3.13a19.56,19.56,0,0,1,11.77-17.37,18.36,18.36,0,0,1,9.23-1.15c-.08-.74-.14-1.33-.21-1.92-.6-5.11-6.14-9.31-11.23-8.63a11.72,11.72,0,0,0-6.24,2.77c-1.57,1.32-3.12,1.26-4.15,0s-.68-2.72.74-4A16,16,0,0,1,126.34,40.61ZM97.4,68.51v-1c0-6.22.06-12.44,0-18.66-.06-5.86-2.62-10.36-7.82-13.16-6.45-3.47-13.33.42-15.76,4.87.42.12.83.24,1.25.34a15.23,15.23,0,0,1,7.12,4,2.7,2.7,0,0,1,.22,3.68,2.63,2.63,0,0,1-3.55.37c-.43-.29-.82-.64-1.24-1a10,10,0,0,0-10.85-1.29c-4,1.81-5.88,5.11-6.11,9.49.5,0,.93,0,1.35,0C72.63,55.44,81.51,64.69,81.62,75c0,1.82-1,3-2.55,3s-2.59-1-2.71-2.89a14.35,14.35,0,0,0-3.58-8.95c-3.38-3.74-7.47-5.52-12.58-4.25C53,63.69,47.43,73.3,51.53,81.12c1.17,2.23.82,3.1-1.15,4.69a16.14,16.14,0,0,0-3.19,3.26c-5.88,8.57.07,20.47,10.57,21.25,1.82.14,2.9,1.19,2.83,2.77a2.52,2.52,0,0,1-3,2.45,31.93,31.93,0,0,1-6.34-1.41,30.41,30.41,0,0,1-4.55-2.45,3.08,3.08,0,0,0-.24.34A12.71,12.71,0,0,0,49,127.62a4.2,4.2,0,0,1,1.46,4,16.56,16.56,0,0,0,.27,6.08c1.66,6.39,8.13,11.09,13.85,10a2.47,2.47,0,0,1,2.66,1.31c.34.56.64,1.14,1,1.7,3.2,5.07,7.86,7.76,13.81,7.61,9.77-.25,17.23-10.28,15-19.8-1.74-7.33-7.34-11.94-15.12-12.45C80,126,79,125,79,123.38s1.22-2.56,3-2.53a20.54,20.54,0,0,1,12.7,4.61c.86.69,1.66,1.45,2.6,2.28,0-.43,0-.64,0-.86q0-24.16,0-48.35c0-3.4-1.84-5.34-5.34-5.79A2.6,2.6,0,0,1,89.53,70a2.51,2.51,0,0,1,2.84-2.43A50,50,0,0,1,97.4,68.51Z"/><path className="cls-1" d="M124.22,93.57c.9,3.12,3.49,5.09,7.18,5.43a2.83,2.83,0,0,1,2.6,1.67,2.64,2.64,0,0,1-2.66,3.61,13.14,13.14,0,0,1-12.27-9.19,2.05,2.05,0,0,0-1.84-1.78,16.81,16.81,0,0,1-8-3.89c-1.42-1.17-1.68-2.64-.72-3.9a2.63,2.63,0,0,1,3.85-.33,15.16,15.16,0,0,0,7.61,3.2,13.34,13.34,0,0,0,12.24-6.12,14.84,14.84,0,0,0,2-6.7c.11-1.8,1.19-2.89,2.77-2.82s2.47,1.23,2.49,3c.08,8-5.93,15.57-13.85,17.51Z"/><path className="cls-1" d="M118.38,149.72c.2-9.59,8.77-18.36,18-18.36,1.84,0,3,1,3.07,2.52s-1,2.61-2.85,2.74c-7.16.54-12.32,6.06-12.91,13.8a2.68,2.68,0,0,1-2.2,2.72,2.61,2.61,0,0,1-2.9-1.74A10.15,10.15,0,0,1,118.38,149.72Z"/><path className="cls-1" d="M117.8,110.38c7.47.58,14,4.43,18.43,11.64a2.66,2.66,0,0,1-.72,3.8,2.56,2.56,0,0,1-3.65-.86,22.08,22.08,0,0,0-5.57-6,19.27,19.27,0,0,0-9.8-3.3c-2.32-.18-3.41-1.16-3.3-2.85S114.52,110.28,117.8,110.38Z"/><path className="cls-1" d="M115.79,53.57a2.62,2.62,0,1,1-2.54-2.63A2.62,2.62,0,0,1,115.79,53.57Z"/><path className="cls-1" d="M75.89,93.56a18.75,18.75,0,0,1-9.42-4.71A17.9,17.9,0,0,1,60.61,75.7a2.63,2.63,0,0,1,2.5-3,2.6,2.6,0,0,1,2.74,2.71c.4,6,3.29,10.24,9,12.26a12.38,12.38,0,0,0,12-1.92,7.75,7.75,0,0,1,1.88-1.17,2.61,2.61,0,0,1,2.47,4.46,16.32,16.32,0,0,1-7.8,4.09,2.85,2.85,0,0,0-2.62,2.29,13,13,0,0,1-12,8.81,2.67,2.67,0,0,1-3-2.48c-.07-1.54,1-2.6,2.69-2.78C72.31,98.63,74.67,96.92,75.89,93.56Z"/><path className="cls-1" d="M81.89,149.72c-.14,1.39-.47,2.52-1.74,3.17a2.14,2.14,0,0,1-2.68-.29,4.55,4.55,0,0,1-1.08-2.38c-.52-5.45-3-9.68-7.87-12.2a17.66,17.66,0,0,0-5.14-1.37c-1.72-.28-2.8-1.19-2.77-2.71s1.19-2.57,3-2.58c7,0,14.12,5.13,16.67,12.19C81,145.54,81.37,147.66,81.89,149.72Z"/><path className="cls-1" d="M86.88,113a2.6,2.6,0,0,1-2.59,2.6,20.7,20.7,0,0,0-8.45,2.1A18.27,18.27,0,0,0,69,123.83c-.29.44-.57.88-.9,1.29a2.6,2.6,0,0,1-3.6.66,2.56,2.56,0,0,1-.74-3.58,29.83,29.83,0,0,1,3.37-4.5,23.14,23.14,0,0,1,16.82-7.36A2.63,2.63,0,0,1,86.88,113Z"/><path className="cls-1" d="M89.5,53.55A2.62,2.62,0,1,1,87,50.94,2.61,2.61,0,0,1,89.5,53.55Z"/>
            </ConditionalClipPath>
          </g>
        )}
        {name === "arrowsUp" && (
          <g>
            <ConditionalClipPath
              condition={isClipPath}
              wrapper={children => (
                <clipPath id="svg-path-arrowsUp">{children}</clipPath>
              )}
            >
              <path d="M167.34,99.88a3.73,3.73,0,0,1-3.69,1.59c-1.15-.11-2.32,0-3.62,0v30.21c0,2.34-.88,3.2-3.24,3.2H132.91c-2.26,0-3.16-.89-3.16-3.14V101.45c-1.56,0-3,0-4.49,0-2.39,0-3.62-2.12-2.35-4.14q9.79-15.54,19.66-31c1.28-2,3.47-1.86,4.83.28Q156.58,81,165.74,95.49c.5.79,1.07,1.54,1.6,2.3ZM135,129.55h19.84v-1.12q0-14.61,0-29.22c0-2,.94-3,2.93-3,.66,0,1.32,0,2.2,0L144.89,72.45,129.83,96.23h1.82c2.51,0,3.32.82,3.32,3.37v30Z"/><path className="cls-1" d="M101.29,33.05a14.13,14.13,0,0,1,1.89,1.9c4.44,6.5,8.81,13,13.23,19.54.7,1,1.14,2.06.52,3.26a2.79,2.79,0,0,1-3,1.42c-.78-.05-1.56,0-2.49,0V78c0,2.18-.92,3.1-3.08,3.1q-7.89,0-15.78,0c-2.16,0-3.07-.92-3.07-3.1V59.16c-1.05,0-2,0-3,0A2.58,2.58,0,0,1,84.26,55q7-10.45,14.08-20.84a6.25,6.25,0,0,1,1.38-1.15ZM94.76,75.79h11.49V74.3c0-5.83,0-11.65,0-17.47A2.57,2.57,0,0,1,109,53.94c.15,0,.29,0,.58-.1L100.5,40.39,91.42,53.87c2.61.19,3.34,1,3.34,3.4Z"/><path className="cls-1" d="M41.08,110.33c2.4,0,4.53,0,6.65,0,2.27,0,3.16.89,3.16,3.14q0,23.16,0,46.33v1.62H84.32v-1.21c0-3.22,0-6.44,0-9.65,0-1.81,1-2.91,2.62-2.9s2.59,1.11,2.59,2.92q0,6.6,0,13.19c0,2-1,2.94-3,2.94H48.7c-2.08,0-3-.94-3-3V115.54c-3,0-5.83,0-8.69,0-1.24,0-2.36-.15-3-1.36s-.24-2.22.44-3.28q15.35-24,30.65-48c1.48-2.3,3.58-2.32,5.06,0Q85.49,87,100.86,111a2.92,2.92,0,0,1,.38,3.17,2.83,2.83,0,0,1-2.88,1.37c-2.87,0-5.74,0-8.82,0v1.28q0,4.83,0,9.66c0,1.8-1,2.9-2.62,2.9s-2.59-1.12-2.59-2.93q0-6.58,0-13.18c0-2,1-2.93,3-2.94,2.18,0,4.35,0,6.85,0L67.61,68.77Z"/><path className="cls-1" d="M87,135.91a2.61,2.61,0,1,1-2.63,2.62A2.56,2.56,0,0,1,87,135.91Z"/>
            </ConditionalClipPath>
          </g>
        )}
        {name === "armor" && (
          <g>
            <ConditionalClipPath
              condition={isClipPath}
              wrapper={children => (
                <clipPath id="svg-path-armor">{children}</clipPath>
              )}
            >
              <path d="M172.36,75.7l-4.13,2.83c.55,3.32,1.12,6.88,1.74,10.44.42,2.4-.11,3.34-2.46,3.86-6.36,1.44-12.73,2.84-19.1,4.25a2.39,2.39,0,0,1-3.17-1.77c-.38-1.09-.72-2.19-1.07-3.29-3.13,3.63-3.82,7.88-4.08,12.37-.36,6.25-1,12.47-1.56,18.71q-.75,8.85-1.51,17.72c-.27,3.18-.57,6.37-.82,9.56a2.46,2.46,0,0,1-1.93,2.15l-20.74,7.66c-4.09,1.52-8.17,3.08-12.29,4.52a3.85,3.85,0,0,1-2.42,0c-11-4-22-8.12-33-12.18a2.71,2.71,0,0,1-2-2.54c-.6-7.6-1.27-15.19-1.93-22.78-.71-8.2-1.45-16.4-2.16-24.61a23.76,23.76,0,0,1-.14-2.39c0-3.23-2.2-5.49-3.57-8.56-.47,1.4-.81,2.45-1.16,3.49C54.2,97,53.3,97.45,51.47,97L32.77,92.9c-2.62-.58-3.17-1.44-2.71-4.07.62-3.5,1.17-7,1.76-10.6-.8-.36-1.53-.67-2.25-1-2.13-1-2.51-2.38-1.09-4.23,2.85-3.7,5.72-7.36,8.58-11,.2-.26.39-.53.64-.87l-2.14-2.43c-1.74-2-1.54-3.26.71-4.65,9-5.57,18.12-11.11,27.14-16.74a7.58,7.58,0,0,1,4.21-1.18q32.43.06,64.86,0a7.39,7.39,0,0,1,4.08,1.17q13.47,8.39,27,16.66c2.5,1.55,2.67,2.71.71,4.92l-2,2.28L172.36,74ZM70.26,40.65c.36.63.6,1.06.87,1.49L79,54.7c1.14,1.83.86,3-1,4.07S74.22,61,72.34,62.18a6.68,6.68,0,0,0-1.52,1.22Q66.35,68.52,62,73.67a4.75,4.75,0,0,0-.89,1.56q-1.53,4.76-3,9.55a1.93,1.93,0,0,0,0,1.32c1.4,2.65,2.87,5.28,4.34,8l1.06-.54Q80.9,84.33,98.27,75.11a3.26,3.26,0,0,1,3.43,0c3.67,2,7.38,3.93,11.08,5.89l24.75,13.09a27.69,27.69,0,0,1,2.15-3.83c2.43-3.09,2.27-6.15,1-9.78a30.06,30.06,0,0,0-6.17-11c-3.56-4-6.92-8.06-11.92-10.33a4.59,4.59,0,0,1-.61-.35c-1.88-1.09-2.17-2.23-1-4l7.93-12.68c.26-.42.5-.84.83-1.41-1.85,0-3.45-.09-5,0a4.38,4.38,0,0,0-2.26.81c-5.44,4.27-10.7,8.79-16.29,12.85-3,2.19-4.64,4.54-3.91,8.26a1.55,1.55,0,0,1,0,.43,2.26,2.26,0,1,1-4.51.05c0-1.37-.07-2.74,0-4.1a2.43,2.43,0,0,0-1.06-2.26C90.22,51.59,83.76,46.4,77.27,41.24a2.09,2.09,0,0,0-1.08-.56C74.28,40.62,72.37,40.65,70.26,40.65Zm50.07,74.12c-.43.12-.7.18-1,.27-6,2.23-12,4.49-18,6.64a4.6,4.6,0,0,1-2.82,0c-3.6-1.23-7.14-2.61-10.7-3.93l-8.2-3.05v17.72c6.58,2.43,13.13,4.88,19.7,7.26a2.54,2.54,0,0,0,1.6-.12c3.27-1.18,6.51-2.41,9.77-3.61l9.56-3.55Zm0-22.64c-.45.13-.76.21-1.06.32-5.94,2.21-11.86,4.47-17.82,6.59a5,5,0,0,1-3,0c-2.42-.75-4.76-1.74-7.13-2.62L79.65,92.09c0,5.79,0,11.43,0,17.06,0,.34.52.83.9,1q9.22,3.48,18.49,6.85a2.52,2.52,0,0,0,1.6.08q9.45-3.43,18.87-7a1.59,1.59,0,0,0,.77-1.2c.09-1.74,0-3.48,0-5.22ZM79.7,137.33v15.44l19.12,7.12a1.77,1.77,0,0,0,.66.22,6.46,6.46,0,0,0,1.76-.26q7.28-2.65,14.52-5.37c1.5-.56,3.58-.74,4.31-1.82s.27-3.16.28-4.8c0-3.47,0-6.93,0-10.47-.42.11-.69.16-1,.25-6,2.23-12,4.5-18,6.65a4.68,4.68,0,0,1-2.82,0c-2.86-.92-5.65-2-8.46-3.09ZM75,151V92.64c-3.54,1.87-7,3.64-10.32,5.5a1.65,1.65,0,0,0-.59,1.34c.37,5.07.79,10.13,1.22,15.19.52,6.14,1.07,12.28,1.59,18.42.41,4.78.79,9.56,1.21,14.34,0,.42.23,1.06.52,1.18C70.72,149.47,72.83,150.22,75,151Zm49.89,0c2.06-.76,3.92-1.5,5.83-2.12a1.51,1.51,0,0,0,1.15-1.52q.59-7.18,1.2-14.35c.52-6.14,1.06-12.28,1.58-18.42.43-5,.81-9.94,1.28-14.9a1.72,1.72,0,0,0-1.14-1.94c-2.93-1.49-5.83-3.06-8.74-4.59-.35-.19-.73-.32-1.16-.5Zm.91-95.36c7.47,4.48,14.77,8.84,22,13.24.76.46,1.09.1,1.52-.38,2.66-3,5.34-6,8-8.94L159.77,57l-25.1-15.43C131.68,46.32,128.8,50.94,125.82,55.7ZM65.33,41.52,40.27,56.94c.24.3.39.53.57.73,3.21,3.57,6.44,7.13,9.61,10.73a1.35,1.35,0,0,0,2.09.32c6.83-4.16,13.7-8.25,20.55-12.37.34-.2.65-.46,1-.73Zm51.54,46.94c-.37-.26-.51-.37-.66-.46-5.15-2.72-10.28-5.46-15.45-8.14a2.08,2.08,0,0,0-1.64.06C94.07,82.53,89.06,85.2,84,87.86a8.61,8.61,0,0,0-.87.62c5.57,2.07,10.92,4.06,16.28,6a1.7,1.7,0,0,0,1.09,0C105.9,92.55,111.25,90.55,116.87,88.46ZM116,40.76H84l16,12.76Zm43.28,23.92a1.52,1.52,0,0,0-.36.2l-7.2,8c-2,2.18-2.45,2.25-5,.71L142,70.76c2.5,3.28,5.13,6.35,7.81,9.38a1.49,1.49,0,0,0,1.23.47c5.13-2.17,10.25-4.41,15.45-6.67ZM33.55,73.93c5.24,2.28,10.39,4.54,15.55,6.75a.9.9,0,0,0,.84-.21Q54.1,75.73,58.2,71a57,57,0,0,0-5.56,3c-1.65,1-2.53.83-3.83-.6Q45.72,70,42.67,66.56c-.59-.65-1.18-1.29-1.83-2Zm1.21,14.69L50.94,92.2l2.66-8.58c-1.88,3.23-4.28,2.31-6.87,1.09-3.43-1.61-6.94-3-10.54-4.61Zm130.47,0-1.4-8.45c-.48.17-.83.29-1.16.44l-11.22,4.87c-1.85.8-2.59.62-4-.89-.3-.34-.62-.68-1.21-1.31l2.79,8.94Z"/>
            </ConditionalClipPath>
          </g>
        )}
        {name === "plusSign" && (
          <g>
            <ConditionalClipPath
              condition={isClipPath}
              wrapper={children => (
                <clipPath id="svg-path-plusSign">{children}</clipPath>
              )}
            >
              <path className="cls-1" d="M39,96c.24-1.6.46-3.19.7-4.79A59.72,59.72,0,0,1,58,56.27,57.82,57.82,0,0,1,89.84,40.38c21.31-3.22,39.67,2.89,54.65,18.47a57.86,57.86,0,0,1,15.64,31.57,60.1,60.1,0,0,1-9.34,43.68,4.78,4.78,0,1,1-8-5.17,50.69,50.69,0,0,0,7.87-19.71c2.39-14.71-.86-28.13-9.91-40-7.76-10.17-18-16.78-30.57-19.07C89.89,46.48,73,52.77,59.79,68.56A46.73,46.73,0,0,0,49.13,93.22c-2.35,19.2,4,35.1,18.89,47.45A48.48,48.48,0,0,0,92.9,151.4a50.68,50.68,0,0,0,33.15-6.61,5.32,5.32,0,0,1,4.19-.83,4.79,4.79,0,0,1,1.24,8.75,56.77,56.77,0,0,1-17.18,7c-3,.68-6.16,1-9.24,1.5a7.06,7.06,0,0,0-.79.21H95.7c-2-.26-3.93-.46-5.87-.8a61.11,61.11,0,0,1-50.11-50.84c-.24-1.6-.46-3.19-.7-4.79Z"/><path className="cls-1" d="M95.22,105.26c-5.68,0-11.19,0-16.7,0a4.73,4.73,0,0,1-4.22-6.93,4.5,4.5,0,0,1,4.22-2.59h16.7V79.3a4.7,4.7,0,0,1,4.73-5c2.83,0,4.79,2,4.79,5,0,5.4,0,10.79,0,16.38h16.52a4.76,4.76,0,1,1,0,9.51H104.74v1.36c0,5,0,10,0,15a4.73,4.73,0,0,1-4.79,5.07c-2.79,0-4.73-2.11-4.73-5.12V105.26Z"/>
            </ConditionalClipPath>
          </g>
        )}
        {name === "quote" && (
          <g>
            <path d="M119.3,107.64c-.09.42-.16.85-.28,1.27a8.89,8.89,0,0,1-7,6.76A9.09,9.09,0,0,1,101.2,109a11.5,11.5,0,0,1-.31-2.8,33.85,33.85,0,0,1,1.42-9.89A24.22,24.22,0,0,1,106,88.66a17.73,17.73,0,0,1,4-4c1-.68,1.92-1.34,2.89-2a2.63,2.63,0,0,1,.55-.22l.08.09a5,5,0,0,1-.26.68c-.87,1.6-1.78,3.18-2.61,4.8a35.26,35.26,0,0,0-3.45,9.76v.12c.55-.12,1.08-.25,1.62-.34a9.22,9.22,0,0,1,9.5,4.86,9.38,9.38,0,0,1,1,3.11,1.72,1.72,0,0,0,.07.21Z"/><path className="cls-1" d="M93.22,82.56c-.09.23-.16.47-.27.69-.89,1.63-1.82,3.24-2.67,4.89a35.71,35.71,0,0,0-3.38,9.63v.14c.56-.12,1.1-.27,1.64-.34a9,9,0,0,1,7.24,2.07,8.73,8.73,0,0,1,3,5,8.93,8.93,0,0,1-2.6,8.66A8.65,8.65,0,0,1,89,115.84a9,9,0,0,1-7.73-5.73,11.9,11.9,0,0,1-.64-5.42,34.47,34.47,0,0,1,1.86-9.84,20.44,20.44,0,0,1,7.8-10.63l2.27-1.55a3.11,3.11,0,0,1,.53-.22Z" />
          </g>
        )}
        {name === "microscope" && (
          <g fill="" stroke="none" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
            <path d="M2285 4898 c-311 -35 -683 -165 -955 -333 -220 -137 -472 -361 -622 -555 -256 -331 -417 -712 -480 -1135 -20 -136 -17 -512 5 -655 103 -665 471 -1245 1027 -1616 287 -191 623 -320 966 -371 164 -24 504 -24 668 0 411 61 815 237 1136 494 459 368 764 897 857 1485 25 159 25 537 0 696 -83 524 -329 995 -708 1356 -370 352 -861 581 -1361 635 -114 13 -419 12 -533 -1z m734 -789 c219 -125 253 -151 249 -189 -3 -21 -9 -26 -43 -30 -35 -5 -42 -10 -71 -60 -17 -30 -50 -88 -73 -128 l-42 -73 31 -29 c38 -35 38 -61 0 -125 -35 -59 -36 -65 -11 -65 50 0 135 -55 180 -117 21 -29 46 -46 97 -68 164 -69 348 -218 440 -356 51 -78 104 -195 125 -279 17 -71 18 -306 0 -385 -81 -367 -421 -706 -786 -785 -61 -13 -142 -23 -210 -24 l-110 -2 0 -33 c0 -33 1 -34 75 -56 94 -28 197 -80 275 -139 59 -45 61 -46 137 -46 91 0 89 3 86 -128 l-3 -92 -767 0 -767 0 2 113 2 112 76 -3 76 -4 69 52 c86 65 167 106 264 135 l75 22 3 90 3 90 -76 45 c-87 51 -192 140 -255 215 l-44 53 -410 2 -411 3 0 80 0 80 135 5 c74 3 126 7 115 8 -11 2 -31 10 -45 18 -17 10 -19 13 -5 9 57 -19 82 -24 154 -30 68 -5 150 2 241 20 14 2 7 -2 -15 -9 -36 -13 -1 -15 329 -15 l368 -1 -16 28 -17 27 25 -27 c24 -27 28 -28 130 -28 57 0 111 -3 120 -6 11 -4 16 -19 16 -44 0 -45 6 -48 125 -56 232 -18 458 132 576 381 78 166 79 331 2 477 -32 62 -128 167 -176 193 l-35 18 -40 -31 c-60 -48 -108 -64 -187 -64 -85 0 -129 16 -189 72 l-45 41 -14 -23 c-32 -50 -291 -485 -310 -521 -27 -49 -61 -71 -98 -63 -21 4 -35 0 -49 -14 -11 -11 -28 -20 -37 -20 -21 0 -316 167 -350 198 -20 19 -24 29 -19 54 4 22 0 37 -14 55 -27 34 -25 53 9 115 31 57 114 207 286 518 60 107 155 280 212 385 57 104 111 197 120 207 18 20 82 25 100 7 8 -8 15 -5 25 12 8 13 29 49 48 79 18 30 40 69 48 85 8 17 23 42 33 56 17 24 17 28 4 39 -18 15 -20 51 -3 68 25 25 66 9 257 -99z"/>
          </g>
        )}
        {name === "chevronLeft" && (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />        
        )}
        {name === "chevronRight" && (
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />        
        )}
        {name === "github" && (
          <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"/>  
        )}
      </motion.svg>

      {name === "counter" && (
        <Count textColor={textColor}>
          {count}
        </Count>
      )}
    </>
  )
}