import React from "react";
import WebsiteCard from "../../components/WebsiteCard";

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
          theme="Affinity"
        ></WebsiteCard>
        <WebsiteCard
          project_title="bricenotennis.com"
          image_url="/bricenotennis.png"
          project_url="https://bricenotennis.com"
          description="Professional tennis player Alex Briceño website. It features a modern and visually engaging design, combining sleek aesthetics with user-friendly navigation to showcase content effectively."
          theme="Lodestar"
        ></WebsiteCard>
        <WebsiteCard
          project_title="hectorbottos.wordpress.com"
          image_url="/hectorbottos.png"
          project_url="https://hectorbottos.wordpress.com"
          description="Amateur painter Héctor Bottos' portfolio website. It showcases a unique and dynamic design, characterized by its visually engaging, playful layout that captures attention and provides an interactive user experience."
          theme="Spun"
        ></WebsiteCard>
        <WebsiteCard
          project_title="foradcamp.com"
          image_url="/foradcamp.png"
          project_url="https://foradcamp.com"
          description="Documentary film festival website. It features a visually stunning and responsive design, seamlessly combining aesthetics with functionality to create an immersive and user-friendly online experience."
          theme="Harmonic"
        ></WebsiteCard>
        <WebsiteCard
          project_title="collectiurucs.wordpress.com"
          image_url="/collectiurucs.png"
          project_url="https://collectiurucs.wordpress.com/treballs/llargs/"
          description="Documentary filmmakers' collective website. The theme offers a clean and modern design with a focus on simplicity and readability, providing an engaging user experience."
          theme="Chunk"
        ></WebsiteCard>
        <WebsiteCard
          project_title="tennisplayersite.wordpress.com"
          image_url="/tennisplayersite.png"
          project_url="https://tennisplayersite.wordpress.com/"
          description="Video business website. The theme combines a sophisticated and versatile design with functionality to create a visually appealing and user-friendly online presence."
          theme="Affinity"
        ></WebsiteCard>
        <WebsiteCard
          project_title="filmacamp.wordpress.com"
          image_url="/filmacamp.png"
          project_url="https://filmacamp.wordpress.com/"
          description="Animation workshop for kids' website. It is a Twenty Ten classic WordPress theme-based platform that features a versatile design, providing a timeless aesthetic with customizable features suitable for a diverse range of online content."
          theme="Twenty Ten"
        ></WebsiteCard>
        <WebsiteCard
          project_title="myplayerprofile.wordpress.com"
          image_url="/myplayerprofile.png"
          project_url="https://myplayerprofile.wordpress.com/"
          description="Platform to showcase profile videos of juvenile football players. The website combines a futuristic and visually captivating design to offer an immersive online experience with a specific focus on young talent in football."
          theme="Intergalactic"
        ></WebsiteCard>

        <WebsiteCard
          project_title="maternitatleshortes.com"
          image_url="/maternitatleshortes.png"
          project_url="https://maternitatleshortes.wordpress.com/"
          description="Family co-parenting group website. It is a classic Twenty Twelve WordPress theme-based platform that features an adaptable design, providing a straightforward and aesthetically pleasing platform for versatile online content."
          theme="Twenty Twelve"
        ></WebsiteCard>

        <WebsiteCard
          project_title="afadovella.cat"
          image_url="/afadovella.png"
          project_url="https://afadovella.cat"
          description="School Family Association's website. It features a clean and minimalist design, paying homage to simplicity and clarity in its presentation for a seamless and reader-friendly online experience."
          theme="Hemingway Rewritten"
        ></WebsiteCard>
        <WebsiteCard
          project_title="bbstorytellers.wordpress.com"
          image_url="/bbstorytellers.png"
          project_url="https://bbstorytellers.wordpress.com/treballs/llargs/"
          description="Scriptwriter's website. It showcases a minimalist and elegant design, prioritizing content clarity and user experience to deliver a visually pleasing and navigable online platform."
          theme="Manifest"
        ></WebsiteCard>
        <WebsiteCard
          project_title="patriciobottos.wordpress.com"
          image_url="/generacionperdida.png"
          project_url="https://patriciobottoss.wordpress.com/"
          description="Amateur writer Patricio Bottos' website, tailored for showcasing short stories. It boasts the classic and versatile design of the Twenty Ten theme to enhance the presentation of literary content in a simple yet effective manner."
          theme="Twenty Ten"
        ></WebsiteCard>
      </div>
    </div>
  );
}
