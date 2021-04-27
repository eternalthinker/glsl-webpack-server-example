import GlslCanvas from 'glslCanvas';
import fragmentShader from './shader.frag';
import catImg from './assets/cat.jpg';

const canvas = document.querySelector('canvas');
const sandbox = new GlslCanvas(canvas);

sandbox.setUniform("u_cat", catImg);
sandbox.load(fragmentShader);
