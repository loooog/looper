import rgbShift from '../../shaders/rgb-shift.js';
import screen from '../../shaders/screen.js';

const fs =
  `
precision highp float;

uniform vec2 resolution;

uniform sampler2D inputTexture;

varying vec2 vUv;
${rgbShift}
${screen}

void main() {
  vec4 color  = rgbShift(inputTexture, vUv, vec2(20.));
  color = screen(color, color, 1.);
  gl_FragColor = color;
}
`;

export { fs };