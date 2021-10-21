import React from "react";
import { Carousel } from "react-carousel-minimal";

const Carroulsel = () => {
    const data = [
        {
          image:
            "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1634689124418-ad4a5ec884d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1634689033402-a132c62b310e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1634693148975-362d570ca495?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1626264146558-56486fabb5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        },
      ];
    
    return (
    <>
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            className="Corousel"
            data={data}
            time={2000}
            slideNumber={false}
            width="100%"
            height="500px"
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="transparent"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
              margin: "0px auto 20px auto",
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Carroulsel;
