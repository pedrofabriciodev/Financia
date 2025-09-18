import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Tamanho base do design (ex: iPhone 12 -> 390x844)
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

// Escalas
export const scaleWidth = (size: number) => (width / BASE_WIDTH) * size;
export const scaleHeight = (size: number) => (height / BASE_HEIGHT) * size;

// Usa o menor entre largura e altura para fonte
const scale = Math.min(width / BASE_WIDTH, height / BASE_HEIGHT);

export const scaleFont = (size: number) => size * scale;
