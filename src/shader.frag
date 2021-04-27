// Based on SuperHi Shaders course

#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

uniform sampler2D u_cat;

vec4 rgb2webglcolor(float r, float g, float b) {
  return vec4(r/255.0, g/255.0, b/255.0, 1.0);
}

void main(void) {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;

  vec2 point = fract(uv * 3.0 + u_time * 0.2);
  vec4 catColor = texture2D(u_cat, point);

  vec4 tl = rgb2webglcolor(251.0, 41.0, 212.0);
  vec4 tr = rgb2webglcolor(0.0, 255.0, 224.0);
  vec4 bl = rgb2webglcolor(250.0, 255.0, 0.0);
  vec4 br = rgb2webglcolor(231.0, 244.0, 255.0);

  float dispX = mix(-0.5, 0.5, catColor.r);
  float dispY = mix(-0.5, 0.5, catColor.r);

  vec4 grad_top = mix(tl, tr, uv.x + dispX);
  vec4 grad_bot = mix(bl, br, uv.x - dispX);
  vec4 color = mix(grad_bot, grad_top, uv.y + dispY);

  gl_FragColor = color;
}
