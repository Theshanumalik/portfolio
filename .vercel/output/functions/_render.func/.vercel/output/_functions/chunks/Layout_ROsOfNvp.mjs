import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, a as renderComponent, e as createAstro, u as unescapeHTML, F as Fragment, f as renderHead, g as renderSlot } from './astro/server_CY37bJuI.mjs';
import 'kleur/colors';
import { getIconData, iconToSVG } from '@iconify/utils';


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/shanu/OneDrive/Desktop/portfolio/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "mdi:github",
      url: "http://www.github.com/theshanumalik"
    },
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      url: "http://www.linkedin.com/in/theshanumalik"
    },
    {
      name: "Twitter",
      icon: "mdi:twitter",
      url: "http://www.twitter.com/theshanumalik"
    },
    {
      name: "Instagram",
      icon: "mdi:instagram",
      url: "http://www.instagram.com/theshanumalik"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-gray-700 mx-auto max-w-2xl"> <div class="py-4 px-3 flex justify-between items-center max-[355px]:flex-col max-[355px]:gap-3"> <p>&copy; 2024 theshanumalik.</p> <ul> ${socialLinks.map((link) => renderTemplate`<li class="inline-block mx-2 text-gray-600 hover:text-gray-700 transition-colors"> <a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": link.icon, "class": "w-6 h-6" })} </a> </li>`)} </ul> </div> </footer>`;
}, "C:/Users/shanu/OneDrive/Desktop/portfolio/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Theshanumalik", description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="w-full max-w-5xl mx-auto"> <div class="px-3"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "C:/Users/shanu/OneDrive/Desktop/portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Icon as a };