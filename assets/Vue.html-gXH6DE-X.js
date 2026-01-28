import{_ as l,c as i,d as e,b as s,t as d,o as c}from"./app-O9I-yMSb.js";const t="/Yanran_blog/assets/Vue-BeANjgBp.png",p="/Yanran_blog/assets/Vue-1-BTNq2poX.png",r="/Yanran_blog/assets/Vue-2-CcfDR2_l.png",o="/Yanran_blog/assets/Vue-3-DC2qWWzV.png",u="/Yanran_blog/assets/Vue-4-D5p6yF0g.png",v="/Yanran_blog/assets/Vue-5-Drtwpn7A.png",m="/Yanran_blog/assets/Vue-6-RKjaX1YX.png",b="/Yanran_blog/assets/Vue-7-CBjNJGBR.png",h="/Yanran_blog/assets/Vue-8-C1S_Si-5.png",g="/Yanran_blog/assets/Vue-9-BlQWLYnE.png",q={};function _(a,n){return c(),i("div",null,[n[2]||(n[2]=e(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>Vue</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><h3 id="_1-1-定义" tabindex="-1"><a class="header-anchor" href="#_1-1-定义"><span>1.1 定义</span></a></h3><ul><li>用于构建用户界面的渐进式JavaScript框架</li><li>提供了一套声明式的、组件化的编程模型</li><li>渐进式框架 <ul><li>无需构建步骤，渐进式增强静态的HTML</li><li>在任何页面中作为Web Components嵌入</li><li>单页应用（SPA）</li><li>全栈/服务端渲染（SSR）</li><li>Jamstack/静态站点生成（SSG）</li><li>开发桌面端、移动端、WebGL、甚至是命令行终端中的界面</li></ul></li></ul><h3 id="_1-2-vue版本" tabindex="-1"><a class="header-anchor" href="#_1-2-vue版本"><span>1.2 Vue版本</span></a></h3><ul><li>Vue2，组件风格为<strong>选项式API</strong>（Options API）</li><li>Vue3，组件风格为<strong>组合式API</strong>（Composition API）</li><li><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">官网</a></li></ul><h3 id="_1-3-vue执行过程" tabindex="-1"><a class="header-anchor" href="#_1-3-vue执行过程"><span>1.3 Vue执行过程</span></a></h3><ul><li>每个Vue应用都是根据creatApp函数创建的一个新的应用实例。</li><li>在一个Vue项目中有且仅有一个一个Vue的实例对象</li><li>传入creatApp的对象实际上是一个组件，每个应用都需要一个==根组件==，其他组件将作为其==子组件==。</li><li>应用实例必须在调用了.mount()方法后才能渲染出来。这个方法接收一个容器参数，可以是一个实际的DOM元素或者是一个CSS选择器字符串。</li><li>src目录下的assets文件夹存放公共资源，例如图片、公共CSS或者字体图标等。</li></ul><h2 id="_2-基础语法" tabindex="-1"><a class="header-anchor" href="#_2-基础语法"><span>2. 基础语法</span></a></h2><h3 id="_2-1-命令行创建" tabindex="-1"><a class="header-anchor" href="#_2-1-命令行创建"><span>2.1 命令行创建</span></a></h3><p>创建项目：<code>npm init vue@latest</code> 执行项目：<code>cd 项目名</code>、<code>npm install</code>，<code>npm run dev</code></p><h3 id="_2-2-模板语法" tabindex="-1"><a class="header-anchor" href="#_2-2-模板语法"><span>2.2 模板语法</span></a></h3><ol><li>文本插值</li></ol><ul><li>最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法（双大括号）</li></ul><ol start="2"><li>属性绑定</li></ol><ul><li>双大括号不能在HTML Attributes中使用。想要相应式地绑定Attribute，需要通过v-bind绑定。</li></ul><h3 id="_2-3-渲染" tabindex="-1"><a class="header-anchor" href="#_2-3-渲染"><span>2.3 渲染</span></a></h3><ol><li>条件渲染</li></ol><p><code>v-if</code>,<code>v-else</code>,<code>v-else-if</code>,<code>v-show</code></p><ol start="2"><li>列表渲染</li></ol><p><code>v-for</code>:不仅能遍历数组中每个元素（<code>(item,index) in results</code>），还可以遍历对象的所有属性（<code>(value,key,index) in results</code>）</p><blockquote><p>[!note] Vue按照“就地更新”的策略来更新通过<code>v-for</code>渲染的列表顺序。需要未每个元素对应的块提供一个唯一的key属性。</p></blockquote><h3 id="_2-4-事件" tabindex="-1"><a class="header-anchor" href="#_2-4-事件"><span>2.4 事件</span></a></h3><ol><li>事件处理</li></ol><p>使用<code>v-on</code>（简写为<code>@</code>）来监听DOM事件，并在事件触发时执行对应的JS。这个JS可以是函数的形式，也可以直接就是一段JS代码。</p><ul><li>内联事件处理器</li><li>方法事件处理器</li></ul><ol start="2"><li>事件参数</li></ol><p>事件参数可以获取<code>event</code>对象和通过实践传递数据</p><ol start="3"><li>事件修饰符</li></ol><p>Vue为<code>v-on</code>提供了事件修饰符，例如：<code>.stop</code>,<code>.prevent</code>,<code>.once</code>,<code>.enter</code>。</p><ol start="4"><li>数组变化侦测</li></ol><ul><li>变更数组:Vue能够侦听响应式数组的变更方法，并在它们被调用时出发相关的更新</li></ul><p><code>push()</code>,<code>pop()</code>,<code>shift()</code>,<code>unshift()</code>,<code>splice()</code>,<code>sort</code>,<code>reverse()</code></p><ul><li>替换整个数组:不更改原数组，总是返回个新数组</li></ul><p><code>filter()</code>,<code>concat()</code>,<code>slice()</code></p><h3 id="_2-5-计算属性" tabindex="-1"><a class="header-anchor" href="#_2-5-计算属性"><span>2.5 计算属性</span></a></h3><ul><li>模板中写太多逻辑会让模板变得臃肿，难以维护。推荐使用计算属性来描述依赖响应式状态的复杂逻辑。</li><li>将模板中需要计算的逻辑放到<code>computed</code>的计算属性里边。</li><li>在表达式中调用函数也可以得到和计算属性相同的结果。但是</li></ul><blockquote><p>[!note] 计算属性：计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。（这个属性值如果没有改变的情况下被多次调用时仅第一次执行运算）</p></blockquote><blockquote><p>[!note] 方法：方法总是在重新渲染时发生函数执行运算。（这个属性值如果没有改变的情况下被多次调用时每次都要调用函数执行运算）</p></blockquote><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">computed:{</span>
<span class="line">	resultContent(){</span>
<span class="line">		return this.result.content.length&gt;0?&quot;Yes&quot;:&quot;No&quot;;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-各种绑定" tabindex="-1"><a class="header-anchor" href="#_3-各种绑定"><span>3. 各种绑定</span></a></h2><h3 id="_3-1-class绑定" tabindex="-1"><a class="header-anchor" href="#_3-1-class绑定"><span>3.1 class绑定</span></a></h3><ul><li>数据绑定的常见需求是操纵元素的CSS class 列表，<code>class</code>是属性，可以用<code>v-bind</code>绑定。</li><li>Vue为<code>class</code>的<code>v-bind</code>提供了特殊的功能增强，除了字符串外，表达式的值也可以是对象或数组。</li><li>如果数组和对象嵌套使用，那么只能是数组嵌套对象。不能对象嵌套数组</li></ul><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML"><pre><code class="language-HTML"><span class="line">&lt;p :class=&quot;{&#39;active&#39;:isActive}&quot;&gt;class 样式绑定&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-2-style绑定" tabindex="-1"><a class="header-anchor" href="#_3-2-style绑定"><span>3.2 style绑定</span></a></h3><ul><li>Vue为<code>style</code>的<code>v-bind</code>提供了特殊的功能增强，除了字符串外，表达式的值也可以是对象或数组。</li><li>一般不用数组，因为<code>style</code>样式本身就是一些键值对，而<code>class</code>是一个值，所以style数组中也是存放对象。</li></ul><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML"><pre><code class="language-HTML"><span class="line"> &lt;p :style=&quot;{color:activeColor, fontSize:fontsize + &#39;px&#39;,}&quot;&gt;style 对象绑定&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-3-侦听器" tabindex="-1"><a class="header-anchor" href="#_3-3-侦听器"><span>3.3 侦听器</span></a></h3><ul><li>侦听器是用来侦听数据的变化的</li><li>使用<code>watch</code>选项在每次响应式属性发生变化时触发一个函数。不是所有的数据都可以侦听，data返回的数据是可以侦听的。</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">watch:{</span>
<span class="line">	//此处函数名必须和要监听的数据变量一致</span>
<span class="line">	message(newValue, oldValue){</span>
<span class="line">		console.log(newValue, oldValue);</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-表单输入绑定" tabindex="-1"><a class="header-anchor" href="#_3-4-表单输入绑定"><span>3.4 表单输入绑定</span></a></h3><ul><li>经常需要将表单输入框中的内容同步给JS中的变量。但是手动连接值绑定和更改事件监听器很麻烦。<code>v-model</code>指令可以简化这个过程的步骤。</li><li>为<code>v-model</code>提供了3个修饰符：<code>.lazy</code>,<code>.number</code>,<code>.trim</code>。</li><li>默认情况下，<code>v-model</code>会在每次input事件后更新数据，添加<code>.lazy</code>后改为每次在change事件后更新数据。</li></ul><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML"><pre><code class="language-HTML"><span class="line">&lt;form&gt;</span>
<span class="line">	&lt;input type=&quot;text&quot; v-model=&quot;message2&quot;&gt;</span>
<span class="line">	&lt;p&gt;{{ message2 }}&lt;/p&gt;</span>
<span class="line">	&lt;input type=&quot;checkbox&quot; id=&quot;checkboxs&quot; v-model=&quot;message3&quot;&gt;</span>
<span class="line">	&lt;label for=&quot;checkboxs&quot;&gt;{{message3}}&lt;/label&gt;</span>
<span class="line">	&lt;input type=&quot;text&quot; v-model.lazy=&quot;message4&quot;&gt;</span>
<span class="line">	&lt;p&gt;{{ message4 }}&lt;/p&gt;</span>
<span class="line">&lt;/form&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-模板引用" tabindex="-1"><a class="header-anchor" href="#_4-模板引用"><span>4. 模板引用</span></a></h2><ul><li>Vue的声明性渲染模型抽象了大部分对DOM的直接操作，但在某些情况下仍然需要直接访问底层DOM元素。这时就需要使用<code>ref attribute</code>，挂在结束后引用都会被暴露在<code>this.$refs</code>上。</li></ul>`,55)),s("ol",null,[s("li",null,"内容改变："+d(a.模板语法),1),n[0]||(n[0]=s("li",null,"属性改变：v-bind:指令",-1)),n[1]||(n[1]=s("li",null,"事件：v-on:click",-1))]),n[3]||(n[3]=e(`<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">&lt;p ref =&quot;a&quot; :class=&quot;classObject&quot;&gt;{{ content }}&lt;/p&gt;</span>
<span class="line">console.log(this.$refs.a.innerHTML=&quot;hahaha&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-组件" tabindex="-1"><a class="header-anchor" href="#_5-组件"><span>5. 组件</span></a></h2><h3 id="_5-1-组件组成" tabindex="-1"><a class="header-anchor" href="#_5-1-组件组成"><span>5.1 组件组成</span></a></h3><ul><li>Vue是组件式开发。</li><li>组件的最大优势就是可复用性</li><li>当使用构建步骤时，一般会将Vue组件定义在一个单独的<code>.vue</code>文件中，这被叫做单文件组件（SFC）</li><li>组件引用：采用ES6提供的import语句，具体步骤有3步如下：</li></ul><ol><li>引入组件</li><li>注入组件</li><li>显示组件</li></ol><h3 id="_5-2-组件嵌套关系" tabindex="-1"><a class="header-anchor" href="#_5-2-组件嵌套关系"><span>5.2 组件嵌套关系</span></a></h3><p><img src="`+t+`" alt="|600"></p><ul><li>组件的注册方式</li></ul><ol><li>局部注册</li><li>全局注册：注册一次全局使用，需要写到<code>main.js</code>中。全局注册但是并没有被使用的组件无法在生产打包时自动移除（tree-shaking）。</li></ol><h3 id="_5-3-组件传递数据-props" tabindex="-1"><a class="header-anchor" href="#_5-3-组件传递数据-props"><span>5.3 组件传递数据（props）</span></a></h3><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">// Parent.vue</span>
<span class="line">&lt;f06_comp title=&quot;Parent 数据&quot; demo=&quot;测试&quot; :msg=&quot;message&quot;/&gt;</span>
<span class="line"></span>
<span class="line">// Child.vue</span>
<span class="line">export default{</span>
<span class="line">    props:[&quot;title&quot;,&quot;demo&quot;, &quot;msg&quot;]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// Child2.vue</span>
<span class="line">export default{</span>
<span class="line">    props:{</span>
<span class="line">        age:{</span>
<span class="line">            type:Number,</span>
<span class="line">            default:0</span>
<span class="line">        },</span>
<span class="line">        demo:{</span>
<span class="line">            type:[String, Number, Array, Object]</span>
<span class="line">        },</span>
<span class="line">        msg:{</span>
<span class="line">            type:String</span>
<span class="line">        }</span>
<span class="line">        //数字和字符串可以直接default,数组和对象必须通过工厂函数返回默认值。</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>通过<code>props</code>传递数据，不仅可以传递字符串类型的数据，还可以传递数字、对象、数组等类型的数据。</p></li><li><p>props是只读的，无法修改父类的值，也就是说只能传参，不能有返回值。</p></li><li><p>通过传函数，能实现子传父。</p></li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">//父</span>
<span class="line">&lt;f07_comp demo=20 :msg=message :names=&quot;names&quot; :onEvent=&quot;dataFn&quot;/&gt;</span>
<span class="line"></span>
<span class="line">dataFn(data){</span>
<span class="line">	console.log(data)</span>
<span class="line">	this.message2 = data</span>
<span class="line">}</span>
<span class="line">//子</span>
<span class="line">&lt;p&gt;{{ onEvent(&quot;要传递的数据&quot;) }}&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-组件事件-组件传递数据" tabindex="-1"><a class="header-anchor" href="#_5-4-组件事件-组件传递数据"><span>5.4 组件事件（组件传递数据）</span></a></h3><ul><li>在组件的模板表达式中，可以直接使用<code>$emit</code>方法触发自定义事件</li><li>触发自定义事件的目的是组件之间的传递数据，实现了子类传父类的数据，也就是返回值。但是是通过事件触发的。</li><li>动态子传父可以用v-model结合watch侦察器实现。</li></ul><blockquote><p>[!note] props:父传子</p></blockquote><blockquote><p>[!note] 自定义事件：子传父</p></blockquote><h3 id="_5-5-透传属性" tabindex="-1"><a class="header-anchor" href="#_5-5-透传属性"><span>5.5 透传属性</span></a></h3><ul><li>传递给一个组件，通常直接传class,style,id</li><li>当一个组件以单个元素为根作渲染时（即==唯一根元素==），透传的属性会自动被添加到根元素上。</li><li>设置为false可以禁用透传属性    inheritAttrs:false,</li></ul><h3 id="_5-6-插槽-slot" tabindex="-1"><a class="header-anchor" href="#_5-6-插槽-slot"><span>5.6 插槽（slot）</span></a></h3><ul><li><p>组件能够接收任意类型的JS值作为props。如果要为子组件传一些模板片段，让子组件渲染这些片段，就要用到插槽。</p></li><li><p><img src="`+p+'" alt="600"></p></li><li><p>插槽内容可以访问到父组件的数据作用域，因为插槽内容本身是在父组件模板中定义的。</p></li><li><p>如果插槽没有传递任何内容，可以设置默认值</p></li><li><p>通过给模板添加具体的v-slot，实现具名插槽</p></li><li><p><img src="'+r+'" alt="600"></p></li><li><p>在某些情况下，插槽内容想要同时使用父组件和子组件的数据，可以向一个插槽的出口传递属性参数。</p></li></ul><h3 id="_5-7-组件生命周期" tabindex="-1"><a class="header-anchor" href="#_5-7-组件生命周期"><span>5.7 组件生命周期</span></a></h3><ul><li>从Vue组件被创建开始到其被卸载，这整个过程叫做该Vue组件的生命周期。</li><li>在此期间，Vue组件需要设置数据侦听，编译模板，挂载实例到DOM等。这些过程执行的那个相应的函数叫做生命周期钩子函数，这个函数无需调用，是自动执行的。</li></ul><p><img src="'+o+'" alt="600"><img src="'+u+'" alt="800"><img src="'+v+`" alt="600"></p><table><thead><tr><th style="text-align:center;">时期</th><th style="text-align:center;">函数</th></tr></thead><tbody><tr><td style="text-align:center;">创建期</td><td style="text-align:center;">beforeCreate, created</td></tr><tr><td style="text-align:center;">挂载期</td><td style="text-align:center;">beforeMount, mounted</td></tr><tr><td style="text-align:center;">更新期</td><td style="text-align:center;">beforeUpdate, updated</td></tr><tr><td style="text-align:center;">销毁期</td><td style="text-align:center;">beforeUnmount, Unmounted</td></tr></tbody></table><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">    beforeCreate(){</span>
<span class="line">        console.log(&quot;组件创建之前&quot;);</span>
<span class="line">    },</span>
<span class="line">    created(){</span>
<span class="line">        console.log(&quot;组件创建之后&quot;);</span>
<span class="line">    },</span>
<span class="line">    beforeMount(){</span>
<span class="line">        console.log(&quot;组件渲染之前&quot;);</span>
<span class="line">    },</span>
<span class="line">    mounted(){</span>
<span class="line">        console.log(&quot;组件渲染之后&quot;);</span>
<span class="line">    },</span>
<span class="line">    beforeUpdate(){</span>
<span class="line">        console.log(&quot;组件更新之前&quot;);</span>
<span class="line">    },</span>
<span class="line">    updated(){</span>
<span class="line">        console.log(&quot;组件创建之后&quot;);</span>
<span class="line">    },</span>
<span class="line">    beforeUnmount(){</span>
<span class="line">        console.log(&quot;组件销毁之前&quot;);</span>
<span class="line">    },</span>
<span class="line">    unmounted(){</span>
<span class="line">        console.log(&quot;组件销毁之后&quot;);</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-8-动态组件" tabindex="-1"><a class="header-anchor" href="#_5-8-动态组件"><span>5.8 动态组件</span></a></h3><ul><li>多个组件动态切换显示.</li><li>当使用<code>&lt;component is=&quot;&quot;&gt;</code>在多个组件间切换时，被切换掉的组件会被卸载。可以通过<code>&lt;keep-alive&gt;</code>组件强制被切换掉的组件仍然保持存活状态。</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">//不保持组件存活</span>
<span class="line">&lt;component :is=&quot;tabComponent&quot;&gt;&lt;/component&gt;</span>
<span class="line">&lt;button @click=&quot;changeHandle&quot;&gt;切换组件&lt;/button&gt;</span>
<span class="line">changeHandle(){</span>
<span class="line">	this.tabComponent=this.tabComponent==&quot;f10_comp&quot;?&quot;f11_comp&quot;:&quot;f10_comp&quot;;</span>
<span class="line">}</span>
<span class="line">//保持组件存活</span>
<span class="line">&lt;keep-alive&gt;</span>
<span class="line">	&lt;component :is=&quot;tabComponent&quot;&gt;&lt;/component&gt;</span>
<span class="line">&lt;/keep-alive&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-异步组件" tabindex="-1"><a class="header-anchor" href="#_5-9-异步组件"><span>5.9 异步组件</span></a></h3><ul><li>在大型项目中，很多模块独立运行，为了优化组件性能，需要使用异步组件，即用到哪个再加载哪个。</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">import { defineAsyncComponent } from &#39;vue&#39;;</span>
<span class="line">import f10_comp from &#39;./f10_comp.vue&#39;;</span>
<span class="line">// import f11_comp from &#39;./f11_comp.vue&#39;;</span>
<span class="line">// 异步加载组件</span>
<span class="line">const f11_comp = defineAsyncComponent(()=&gt;import(&quot;./f11_comp.vue&quot;))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-10-依赖注入" tabindex="-1"><a class="header-anchor" href="#_5-10-依赖注入"><span>5.10 依赖注入</span></a></h3><ul><li><img src="`+m+'" alt=""></li><li><img src="'+b+`" alt=""></li><li>provide和inject只能由上到下的传递。</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">//父</span>
<span class="line">provide:{</span>
<span class="line">	message:&quot;f09的数据&quot;,</span>
<span class="line">},</span>
<span class="line">//子</span>
<span class="line">inject:[&quot;message&quot;],</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-组合式api" tabindex="-1"><a class="header-anchor" href="#_6-组合式api"><span>6 组合式API</span></a></h2><h3 id="_6-1-选项式和组合式对比" tabindex="-1"><a class="header-anchor" href="#_6-1-选项式和组合式对比"><span>6.1 选项式和组合式对比</span></a></h3><ul><li>选项式API使用包含多个选项的对象来描述组件的逻辑，例如<code>data</code>，<code>methods</code>,<code>mounted</code>等。选项所定义的属性都会暴露在函数内部的this上，它会指向当前的组件实例。</li><li><img src="`+h+`" alt=""></li><li>vue3 的组合式API每次使用时需要引用相应的配件函数功能等，优势是在打包时只把使用的功能打包。</li></ul><h3 id="_6-2-响应式api" tabindex="-1"><a class="header-anchor" href="#_6-2-响应式api"><span>6.2 响应式API</span></a></h3><ul><li>组合式中没有data选项。变量的初始化依赖于ref和reactive。</li><li><blockquote><p>[!note] ref用于创建基本类型响应数据（String Number Boolean）// 在JS读取时必须通过.value才能读取到值</p></blockquote></li><li><blockquote><p>[!note] reactive用于创建引用类型响应数据（Array Object）</p></blockquote></li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">import{ref} from &#39;vue&#39;</span>
<span class="line">const count = ref(0)</span>
<span class="line">const userInfo = reactive({</span>
<span class="line">    name:&quot;iewn&quot;,</span>
<span class="line">})</span>
<span class="line">function increment(){</span>
<span class="line">    count.value++;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-计算属性" tabindex="-1"><a class="header-anchor" href="#_6-3-计算属性"><span>6.3 计算属性</span></a></h3><ul><li>使用选项式API的时候，所有的计算属性都必须放在<code>computed</code>中，这样如果又很多计算属性就会很复杂且臃肿，组合式API会简洁很多。</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const message = ref(&quot;ABC&quot;)</span>
<span class="line">//计算属性</span>
<span class="line">// 在JS读取时必须通过.value才能读取到值</span>
<span class="line">const myreverse = computed(()=&gt;{</span>
<span class="line">    return message.value.split(&quot;&quot;).reverse().join(&quot;&quot;)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-事件处理" tabindex="-1"><a class="header-anchor" href="#_6-4-事件处理"><span>6.4 事件处理</span></a></h3><ul><li>组合式API中事件处理与原生JS很相似</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">&lt;button @click=&quot;increment($event)&quot;&gt;Count={{ count }}&lt;/button&gt;</span>
<span class="line">function increment(e){</span>
<span class="line">    console.log(&quot;count++&quot;)</span>
<span class="line">    count.value++;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-侦听器" tabindex="-1"><a class="header-anchor" href="#_6-5-侦听器"><span>6.5 侦听器</span></a></h3><ul><li>使用选项式API的时候，所有的侦听器都必须放在<code>watch</code>中，这样如果又很多侦听器就会很复杂且臃肿，组合式API会简洁很多。</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">//侦听器</span>
<span class="line">watch(count,(NewValue,OldValue)=&gt;{</span>
<span class="line">    console.log(NewValue,OldValue);</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6-生命周期" tabindex="-1"><a class="header-anchor" href="#_6-6-生命周期"><span>6.6 生命周期</span></a></h3><ul><li>选项式写法只能存在一个mounted，写多个时会后者覆盖前者。</li><li>组合式写法可以写多个mounted。其他生命函数钩子函数类似。(导入是==on==Mounted)</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">import{onMounted} from &#39;vue&#39;</span>
<span class="line">//生命周期</span>
<span class="line">onMounted(()=&gt;{</span>
<span class="line">    console.log(&quot;Initial count is &quot; + count.value)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-7-模板引用" tabindex="-1"><a class="header-anchor" href="#_6-7-模板引用"><span>6.7 模板引用</span></a></h3><ul><li>本质上声明一个ref来存放该元素的引用，必须和模板里的ref同名</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">//这个不能放在函数里</span>
<span class="line">const countNumber = ref(null);</span>
<span class="line">onMounted(()=&gt;{</span>
<span class="line">    console.log(&quot;Initial count is &quot;+ count.value);</span>
<span class="line">    console.log(&quot;Initial count is &quot;+ countNumber.value.innerHTML);</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-7-组件传参-props" tabindex="-1"><a class="header-anchor" href="#_6-7-组件传参-props"><span>6.7 组件传参（props）</span></a></h3><ul><li>组合式引用子模板只需导入后就可以使用，无需注入。</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">//props</span>
<span class="line">const props = defineProps({</span>
<span class="line">    title:{</span>
<span class="line">        type:String,</span>
<span class="line">        default:&quot;&quot;</span>
<span class="line">    }</span>
<span class="line">})</span>
<span class="line">console.log(props)</span>
<span class="line">console.log(props.title)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-8-组件事件" tabindex="-1"><a class="header-anchor" href="#_6-8-组件事件"><span>6.8 组件事件</span></a></h3><ul><li>需要先定义一个emit把所有组件事件的句柄都初始化好，然后在函数里选择用哪个句柄发送组件间的哪个事件。类似于6.6节。</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const emit = defineEmits([&quot;eventf14&quot;,])</span>
<span class="line">//组件事件</span>
<span class="line">function increment(e){</span>
<span class="line">    console.log(&quot;count++&quot;)</span>
<span class="line">    count.value++;</span>
<span class="line">    emit(&quot;eventf14&quot;, [this.count, this.message])</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-自定义指令" tabindex="-1"><a class="header-anchor" href="#_7-自定义指令"><span>7. 自定义指令</span></a></h2><h3 id="_7-1-局部自定义指令" tabindex="-1"><a class="header-anchor" href="#_7-1-局部自定义指令"><span>7.1 局部自定义指令</span></a></h3><ul><li>除了Vue内置的指令（例如<code>v-model</code>，<code>v-show</code>）等，Vue还允许自己定义的指令（Custom Directives）</li></ul><ol><li>选项式API</li></ol><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">&lt;p v-author&gt;西游记&lt;/p&gt;</span>
<span class="line">//自定义指令</span>
<span class="line">    directives:{</span>
<span class="line">        author:{</span>
<span class="line">            mounted(element){</span>
<span class="line">                console.log(element);</span>
<span class="line">                element.innerHTML = element.innerHTML + &quot;-wy撰写&quot;;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>组合式API</li></ol><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">&lt;p v-author&gt;西游记&lt;/p&gt;</span>
<span class="line">//自定义指令</span>
<span class="line">const vAuthor = {</span>
<span class="line">    mounted:(element)=&gt;{</span>
<span class="line">        console.log(element);</span>
<span class="line">        element.innerHTML = element.innerHTML + &quot;-wy撰写&quot;;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-全局自定义指令" tabindex="-1"><a class="header-anchor" href="#_7-2-全局自定义指令"><span>7.2 全局自定义指令</span></a></h3><ul><li>自定义指令可以分为全局自定义指令和局部自定义指令。在全局注册则可以在任意组件中使用；局部注册只能在当前组件中使用。</li><li>7.1中两种都是局部自定义指令，全局自定义指令写在<code>main.js</code>中。</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const app = createApp(App);</span>
<span class="line">//在挂载前写全局注册的组件</span>
<span class="line">app.component(&quot;f04_component&quot;, f04_component);</span>
<span class="line">//在挂载前写全局自定义指令</span>
<span class="line">app.directive(&quot;red&quot;,{</span>
<span class="line">    mounted(element){</span>
<span class="line">        element.style.color = &#39;red&#39;;</span>
<span class="line">    }</span>
<span class="line">})</span>
<span class="line">app.mount(&#39;#app&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-自定义指令钩子函数" tabindex="-1"><a class="header-anchor" href="#_7-3-自定义指令钩子函数"><span>7.3 自定义指令钩子函数</span></a></h3><ul><li>自定义指令有很多钩子函数，可以理解为是自定义指令的生命周期函数，在不同情况下会自动调用。</li><li>同组件的生命周期函数相比，少了一个beforecreate。</li><li><img src="`+g+`" alt=""></li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const vBlue = {</span>
<span class="line">	//在绑定元素的attribute前</span>
<span class="line">	//或事件监听器应用前调用</span>
<span class="line">	created(el, binding, vnode, prevVnode){</span>
<span class="line">		console.log(&quot;created&quot;);</span>
<span class="line">	},</span>
<span class="line">	</span>
<span class="line">	//在元素被插入到DOM前调用</span>
<span class="line">	beforeMount(el, binding, vnode, prevVnode){</span>
<span class="line">		console.log(&quot;beforeMount&quot;);</span>
<span class="line">	},</span>
<span class="line">	</span>
<span class="line">	//在绑定元素的父组件</span>
<span class="line">	//以及它自己的所有子节点都挂载完成后调用</span>
<span class="line">	mounted(el, binding, vnode, prevVnode){</span>
<span class="line">		console.log(el);</span>
<span class="line">        console.log(binding);</span>
<span class="line">        console.log(vnode);</span>
<span class="line">        console.log(prevVnode);</span>
<span class="line">        el.style.color = &#39;blue&#39;;</span>
<span class="line">		console.log(&quot;mounted&quot;);</span>
<span class="line">	},</span>
<span class="line">	</span>
<span class="line">	//绑定元素的父组件更新前调用</span>
<span class="line">	beforeUpdate(el, binding, vnode, prevVnode){</span>
<span class="line">		console.log(&quot;beforeUpdate&quot;);</span>
<span class="line">	},</span>
<span class="line">	</span>
<span class="line">	//在绑定元素的父组件</span>
<span class="line">	//以及它自己的所有子节点都更新后调用</span>
<span class="line">	updated(el, binding, vnode, prevVnode){</span>
<span class="line">		console.log(&quot;updated&quot;);</span>
<span class="line">	},</span>
<span class="line">	</span>
<span class="line">	//绑定元素的父组件卸载前调用</span>
<span class="line">	beforeUnmount(el, binding, vnode, prevVnode){</span>
<span class="line">		console.log(&quot;beforeUnmount&quot;);</span>
<span class="line">	},</span>
<span class="line">	</span>
<span class="line">	//绑定元素的父组件卸载后调用</span>
<span class="line">	unmounted(el, binding, vnode, prevVnode){</span>
<span class="line">		console.log(&quot;unmounted&quot;);</span>
<span class="line">	},</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75))])}const S=l(q,[["render",_]]),x=JSON.parse('{"path":"/guide/knowledge/Vue.html","title":"Vue","lang":"zh-CN","frontmatter":{},"git":{},"filePathRelative":"guide/knowledge/Vue.md"}');export{S as comp,x as data};
