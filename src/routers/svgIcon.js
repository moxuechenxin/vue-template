import {
  INDEX
} from './_consts/svgIcon'

export default [{
  name: INDEX.name,
  path: INDEX.path,
  component: resolve => require(['@/views/svgIcon/Index.vue'], resolve),
  meta: {
  }
}]
