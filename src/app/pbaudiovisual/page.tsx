import React from "react";
import WebsiteCard from "../components/WebsiteCard";

export default function Pbaudiovisual() {
  return (
    <div className="flex flex-col mt-4">
      <h1 className="text-5xl font-bold font-bodoni text-light-blue">
        WordPress Sites
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:grid-flow-row">
        <WebsiteCard
          project_title="pbaudiovisual.wordpress.com"
          image_url="/pbaudiovisual.png"
          project_url="https://pbaudiovisual.wordpress.com/"
          description="This website showcases my creative work in the field of audiovisual production, using the versatile platform of WordPress to present my projects and skills."
        ></WebsiteCard>
        <WebsiteCard
          project_title="bricenotennis.com"
          image_url="/bricenotennis.png"
          project_url="https://bricenotennis.com"
          description="This website showcases my creative work in the field of audiovisual production, using the versatile platform of WordPress to present my projects and skills."
        ></WebsiteCard>
        <WebsiteCard
          project_title="tennisplayersite.wordpress.com"
          image_url="/tennisplayersite.png"
          project_url="https://tennisplayersite.wordpress.com/"
          description="This website showcases my creative work in the field of audiovisual production, using the versatile platform of WordPress to present my projects and skills."
        ></WebsiteCard>
        <WebsiteCard
          project_title="afadovella.cat"
          image_url="/afadovella.png"
          project_url="https://afadovella.cat"
          description="This website showcases my creative work in the field of audiovisual production, using the versatile platform of WordPress to present my projects and skills."
        ></WebsiteCard>
      </div>
    </div>
  );
}
