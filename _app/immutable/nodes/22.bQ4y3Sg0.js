import{a as A,t as L,b as s,s as a,f as M}from"../chunks/disclose-version.CEbLymSa.js";import{h as n}from"../chunks/html.CRu8H1xh.js";import{l as F,s as Y}from"../chunks/props.CBRLfZBG.js";import{M as N}from"../chunks/mdsvex-blog.CbF4kdi_.js";var P=L(`<p>daisyUI provides semantic color names. These color names are used in all daisyUI components and the can have different values in different themes.</p> <h2 id="the-problem-with-constant-color-names"><a aria-hidden="true" tabindex="-1" href="#the-problem-with-constant-color-names"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>The problem with constant color names</h2> <p>Using Tailwind CSS color names, you should use constant color names for everything. For example, to set a light background and dark text we you have to use <code>bg-white text-black</code> and then again for a dark mode, you would have to set <code>dark:bg-black dark:text-white</code></p> <p>That is not efficient because not only you should use more class names for each element to set the colors, having a dark mode would require you to decide on the colors for each element again. Imaging how hard it would be to add more themes to your project.</p> <h2 id="solution-semantic-color-names-and-css-variables"><a aria-hidden="true" tabindex="-1" href="#solution-semantic-color-names-and-css-variables"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Solution: Semantic color names and CSS variables</h2> <p>daisyUI solves this problem by providing semantic color names. For example, you can use <code>bg-base-100 text-base-content</code> and then set the background and foreground colors.That’s it. It would be dark color on a light background when you use a light theme, It would be light color on a dark background when a dark theme is used.
daisyUI semantic color names (<code>base</code>, <code>primary</code>, etc) are using CSS variables for the color values. So you can easily change the theme of your entire site by changing the value of these variables.
You can also have multiple themes at the same time without adding a single class name. Light mode, dark mode, or any other theme you want.</p> <p>These are the daisyUI color names: <img src="https://img.daisyui.com/images/blog/daisyui-colors.webp" alt="Mary UI form"> Read more about <a href="https://daisyui.com/docs/colors" rel="nofollow" target="_blank">daisyUI color system</a> and <a href="https://daisyui.com/docs/themes/" rel="nofollow" target="_blank">daisyUI themes</a></p> <h2 id="how-using-a-color-palette-can-help"><a aria-hidden="true" tabindex="-1" href="#how-using-a-color-palette-can-help"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How using a color palette can help</h2> <p>In a design system, you should have a color palette. A color palette is a set of colors that you use in your design system. This helps you to have a consistent look and feel across your entire site.
A common practice is to have:</p> <ul><li>A set of brand colors (<code>primary</code>, <code>secondary</code>, <code>accent</code>)</li> <li>A set of state colors (<code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>)</li> <li>A set of neutral colors for the background and content</li></ul> <p>These names are enough for almost all design systems. Most successful design even need less colors. More than that would make the design complicated for the users and also for the developers.</p> <h2 id="how-to-add-new-colors-to-daisyui-themes"><a aria-hidden="true" tabindex="-1" href="#how-to-add-new-colors-to-daisyui-themes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to add new colors to daisyUI themes</h2> <p>However just because daisyUI is offering these color names, it doesn’t mean you’re limited to these colors. You can add new color names and use them in daisyUI themes.</p> <p>daisyUI has <code>primary</code> and <code>primary-content</code> but let’s say you need a new shade of your primary color.</p> <h3 id="step-1-lets-add-a-new-color-called-primary-muted-to-tailwind-css"><a aria-hidden="true" tabindex="-1" href="#step-1-lets-add-a-new-color-called-primary-muted-to-tailwind-css"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Step 1: Let’s add a new color called <code>primary-muted</code> to Tailwind CSS</h3> <p>This allows us to use this new color name with all Tailwind CSS color utilities. For example, <code>bg-primary-muted</code> would set the background color to the new color.</p> <pre class="language-js"><!></pre> <h3 id="step-2-lets-use-the-new-primary-muted-color-in-daisyui-light-themes"><a aria-hidden="true" tabindex="-1" href="#step-2-lets-use-the-new-primary-muted-color-in-daisyui-light-themes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Step 2: Let’s use the new <code>primary-muted</code> color in daisyUI <code>light</code> themes.</h3> <p>Now we add the new color to a theme and set color values for it.</p> <pre class="language-js"><!></pre> <p>You can set a different value for the new color in themes as well.
Let’s add the new color name to <code>cupcake</code> and <code>dark</code> theme:</p> <pre class="language-js"><!></pre> <p>Now you can simply use <code>bg-primary-muted</code> (or other Tailwind CSS color utilities) wherever you want and it will have different colors on each theme.</p>`,1);const z={title:"How to add a new color to daisyUI themes",desc:"Do you want to add new color names to daisyUI color palette? Here is how you can do it.",published:!0,date:"2023-9-18",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/how-to-add-new-colors-to-daisyui.webp",tags:["Guides"]};function B(p,c){const r=F(c,["children","$$slots","$$events","$$legacy"]);N(p,Y(()=>r,z,{children:(l,D)=>{var t=P(),i=M(t),u=a(a(i,!0)),d=a(a(u,!0)),k=a(a(d,!0)),m=a(a(k,!0)),h=a(a(m,!0)),y=a(a(h,!0)),g=a(a(y,!0)),v=a(a(g,!0)),b=a(a(v,!0)),f=a(a(b,!0)),w=a(a(f,!0)),_=a(a(w,!0)),x=a(a(_,!0)),I=a(a(x,!0)),S=a(a(I,!0)),e=a(a(S,!0)),U=s(e);n(U,()=>`<code class="language-js"><span class="token comment">// tailwind.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token string-property property">"primary-muted"</span><span class="token operator">:</span> <span class="token string">"oklch(var(--primary-muted) / &lt;alpha-value>)"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`);var $=a(a(e,!0)),T=a(a($,!0)),o=a(a(T,!0)),j=s(o);n(j,()=>`<code class="language-js"><span class="token comment">// tailwind.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token string-property property">"primary-muted"</span><span class="token operator">:</span> <span class="token string">"oklch(var(--primary-muted) / &lt;alpha-value>)"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token comment">// importing the built-in 'light' theme</span>
          <span class="token comment">// and setting the color values for '--primary-muted'</span>
          <span class="token comment">// (numbers are OKLCH values)</span>
          <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"light"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-property property">"--primary-muted"</span><span class="token operator">:</span> <span class="token string">"65% 0.2 295"</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`);var q=a(a(o,!0)),C=a(a(q,!0)),H=s(C);n(H,()=>`<code class="language-js"><span class="token comment">// tailwind.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token string-property property">"primary-muted"</span><span class="token operator">:</span> <span class="token string">"oklch(var(--primary-muted) / &lt;alpha-value>)"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// light theme</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"light"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-property property">"--primary-muted"</span><span class="token operator">:</span> <span class="token string">"65% 0.2 295"</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token comment">// cupcake theme</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">cupcake</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"cupcake"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-property property">"--primary-muted"</span><span class="token operator">:</span> <span class="token string">"87% 0.05 200"</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token comment">// dark theme</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">dark</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"dark"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-property property">"--primary-muted"</span><span class="token operator">:</span> <span class="token string">"34% 0.2 289"</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`),A(l,t)},$$slots:{default:!0},$$legacy:!0}))}export{B as component};
