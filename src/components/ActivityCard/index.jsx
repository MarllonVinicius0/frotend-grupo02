import React from "react";
import {
  ActivityItem,
  ActivityTitle
} from "./style";

export default function ActivityCard({ titulo }) {
  return (
    <ActivityItem>
      <ActivityTitle>{titulo}</ActivityTitle>
    </ActivityItem>
  );
}