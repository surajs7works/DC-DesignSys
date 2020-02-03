import React from "react";
import { action } from "@storybook/addon-actions";
import { TagButton } from "../components/Tag";
import Gameimage from "../assets/Gameimage.png";
import "../Styles/GlobalStyle.css";
import {
  Cards,
  ListCard,
  CardSkeleton,
  SkeletonListCard
} from "../components/Cards";
import Defaultavt from "../assets/Defaultavt.png";
import CardStyles from "../components/CardStyle";

export default {
  title: "Cards"
};

export const AllCards = () => (
  <div>
    <Cards onClick={action("clicked")}>
      <img alt="Remy Sharp" src={Gameimage} />
      <div className="Card-content">
        <h4>Fuji Koro (2011)</h4>
        <div className="short-info">
          <li>1-6 Palyers</li>
          <li>45-60 Min</li>
          <li>Age 14+</li>
        </div>
      </div>
    </Cards>
  </div>
);

export const SkeletonCard = () => (
  <div>
    <CardSkeleton onClick={action("clicked")}>
      <div className="ImgPlaceholder" />
      <div className="Card-content">
        <div className="Placeholder-title"></div>
        <div className="short-info">
          <div className="Placeholder-info"></div>
        </div>
      </div>
    </CardSkeleton>
  </div>
);

export const ListCards = () => (
  <div>
    <ListCard onClick={action("clicked")}>
      <img alt="Remy Sharp" src={Gameimage} />
      <div className="ListCard-content">
        <h4>Fuji Koro (2011)</h4>
        <div className="short-info">
          <li>1-6 Palyers</li>
          <li>45-60 Min</li>
          <li>Age 14+</li>
        </div>
      </div>
    </ListCard>
  </div>
);

export const SkeletonListCards = () => (
  <div>
    <SkeletonListCard onClick={action("clicked")}>
      <div className="ListImgPlaceholder" />
      <div className="Card-content">
        <div className="Placeholder-title"></div>
        <div className="short-info">
          <div className="Placeholder-info"></div>
        </div>
      </div>
    </SkeletonListCard>
  </div>
);
