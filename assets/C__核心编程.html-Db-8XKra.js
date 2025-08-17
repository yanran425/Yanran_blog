import{_ as s,c as a,d as p,o as l}from"./app-ZTDKGR0h.js";const e="/Yanran_blog/assets/C__%E6%A0%B8%E5%BF%83%E7%BC%96%E7%A8%8B-bDaiQOSP.png",t="/Yanran_blog/assets/C__%E6%A0%B8%E5%BF%83%E7%BC%96%E7%A8%8B-1-B_v-IO--.png",i="/Yanran_blog/assets/C__%E6%A0%B8%E5%BF%83%E7%BC%96%E7%A8%8B-2-CLumRLZ1.png",c="/Yanran_blog/assets/C__%E6%A0%B8%E5%BF%83%E7%BC%96%E7%A8%8B-3-BXJr9rXN.png",o="/Yanran_blog/assets/C__%E6%A0%B8%E5%BF%83%E7%BC%96%E7%A8%8B-4-n7XViFlN.png",u="/Yanran_blog/assets/C__%E6%A0%B8%E5%BF%83%E7%BC%96%E7%A8%8B-5-DIcPaOZ1.png",d="/Yanran_blog/assets/C__%E6%A0%B8%E5%BF%83%E7%BC%96%E7%A8%8B-6-DiPF5Z-W.png",r="/Yanran_blog/assets/C__%E6%A0%B8%E5%BF%83%E7%BC%96%E7%A8%8B-7-0shq7vpD.jpg",v="/Yanran_blog/assets/C__%E6%A0%B8%E5%BF%83%E7%BC%96%E7%A8%8B-8-CdHBFf6q.png",k={};function m(b,n){return l(),a("div",null,n[0]||(n[0]=[p(`<h1 id="c-核心编程" tabindex="-1"><a class="header-anchor" href="#c-核心编程"><span>C++核心编程</span></a></h1><p>本阶段主要针对C++==面向对象==编程技术做详细讲解，探讨C++中的核心和精髓。</p><h2 id="_1-内存分区模型" tabindex="-1"><a class="header-anchor" href="#_1-内存分区模型"><span>1 内存分区模型</span></a></h2><p>C++程序在执行时，将内存大方向划分为<strong>4个区域</strong></p><ul><li>代码区：存放函数体的二进制代码，由操作系统进行管理的</li><li>全局区：存放全局变量和静态变量以及常量</li><li>栈区：由编译器自动分配释放, 存放函数的参数值,局部变量等</li><li>堆区：由程序员分配和释放,若程序员不释放,程序结束时由操作系统回收</li></ul><p><strong>内存四区意义：</strong></p><p>不同区域存放的数据，赋予不同的生命周期, 给我们更大的灵活编程</p><h3 id="_1-1-程序运行前" tabindex="-1"><a class="header-anchor" href="#_1-1-程序运行前"><span>1.1 程序运行前</span></a></h3><p>​ 在程序编译后，生成了exe可执行程序，<strong>未执行该程序前</strong>分为两个区域</p><p>​ <strong>代码区：</strong></p><p>​ 存放 CPU 执行的机器指令</p><p>​ 代码区是<strong>共享</strong>的，共享的目的是对于频繁被执行的程序，只需要在内存中有一份代码即可</p><p>​ 代码区是<strong>只读</strong>的，使其只读的原因是防止程序意外地修改了它的指令</p><p>​ <strong>全局区：</strong></p><p>​ 全局变量和静态变量存放在此.</p><p>​ 全局区还包含了常量区, 字符串常量和其他常量也存放在此.</p><p>​ ==该区域的数据在程序结束后由操作系统释放==.</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//全局变量</span></span>
<span class="line"><span class="token keyword">int</span> g_a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> g_b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//全局常量</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token keyword">int</span> c_g_a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token keyword">int</span> c_g_b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//局部变量</span></span>
<span class="line">	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//打印地址</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;局部变量a地址为： &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;局部变量b地址为： &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;全局变量g_a地址为： &quot;</span> <span class="token operator">&lt;&lt;</span>  <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>g_a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;全局变量g_b地址为： &quot;</span> <span class="token operator">&lt;&lt;</span>  <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>g_b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//静态变量</span></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">int</span> s_a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">int</span> s_b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;静态变量s_a地址为： &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>s_a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;静态变量s_b地址为： &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>s_b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;字符串常量地址为： &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span><span class="token string">&quot;hello world&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;字符串常量地址为： &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span><span class="token string">&quot;hello world1&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;全局常量c_g_a地址为： &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>c_g_a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;全局常量c_g_b地址为： &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>c_g_b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token keyword">int</span> c_l_a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">const</span> <span class="token keyword">int</span> c_l_b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;局部常量c_l_a地址为： &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>c_l_a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;局部常量c_l_b地址为： &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>c_l_b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p><p><img src="`+e+`" alt=""></p><p>总结：</p><ul><li>C++中在程序运行前分为全局区和代码区</li><li>代码区特点是共享和只读</li><li>全局区中存放全局变量、静态变量、常量</li><li>常量区中存放 const修饰的全局常量 和 字符串常量</li></ul><h3 id="_1-2-程序运行后" tabindex="-1"><a class="header-anchor" href="#_1-2-程序运行后"><span>1.2 程序运行后</span></a></h3><p>​ <strong>栈区：</strong></p><p>​ 由编译器自动分配释放, 存放函数的参数值,局部变量等</p><p>​ 注意事项：不要返回局部变量的地址，栈区开辟的数据由编译器自动释放</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">int</span> <span class="token operator">*</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ <strong>堆区：</strong></p><p>​ 由程序员分配释放,若程序员不释放,程序结束时由操作系统回收</p><p>​ 在C++中主要利用new在堆区开辟内存</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">int</span><span class="token operator">*</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> a<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><p>堆区数据由程序员管理开辟和释放</p><p>堆区数据利用new关键字进行开辟内存</p><h3 id="_1-3-new操作符" tabindex="-1"><a class="header-anchor" href="#_1-3-new操作符"><span>1.3 new操作符</span></a></h3><p>​ C++中利用==new==操作符在堆区开辟数据</p><p>​ 堆区开辟的数据，由程序员手动开辟，手动释放，释放利用操作符 ==delete==</p><p>​ 语法：<code> new 数据类型</code></p><p>​ 利用new创建的数据，会返回该数据对应的类型的指针</p><p><strong>示例1： 基本语法</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">int</span><span class="token operator">*</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> a<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//利用delete释放堆区数据</span></span>
<span class="line">	<span class="token keyword">delete</span> p<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//cout &lt;&lt; *p &lt;&lt; endl; //报错，释放的空间不可访问</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例2：开辟数组</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//堆区开辟数组</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">int</span><span class="token operator">*</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">//释放数组 delete 后加 []</span></span>
<span class="line">	<span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-引用" tabindex="-1"><a class="header-anchor" href="#_2-引用"><span>2 引用</span></a></h2><h3 id="_2-1-引用的基本使用" tabindex="-1"><a class="header-anchor" href="#_2-1-引用的基本使用"><span>2.1 引用的基本使用</span></a></h3><p>**作用： **给变量起别名</p><p><strong>语法：</strong> <code>数据类型 &amp;别名 = 原名</code></p><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	int a = 10;</span>
<span class="line">	int &amp;b = a;</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; &quot;a = &quot; &lt;&lt; a &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; &quot;b = &quot; &lt;&lt; b &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	b = 100;</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; &quot;a = &quot; &lt;&lt; a &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; &quot;b = &quot; &lt;&lt; b &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-引用注意事项" tabindex="-1"><a class="header-anchor" href="#_2-2-引用注意事项"><span>2.2 引用注意事项</span></a></h3><ul><li>引用必须初始化</li><li>引用在初始化后，不可以改变</li></ul><p>示例：</p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	int a = 10;</span>
<span class="line">	int b = 20;</span>
<span class="line">	//int &amp;c; //错误，引用必须初始化</span>
<span class="line">	int &amp;c = a; //一旦初始化后，就不可以更改</span>
<span class="line">	c = b; //这是赋值操作，不是更改引用</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; &quot;a = &quot; &lt;&lt; a &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; &quot;b = &quot; &lt;&lt; b &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; &quot;c = &quot; &lt;&lt; c &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-引用做函数参数" tabindex="-1"><a class="header-anchor" href="#_2-3-引用做函数参数"><span>2.3 引用做函数参数</span></a></h3><p>**作用：**函数传参时，可以利用引用的技术让形参修饰实参</p><p>**优点：**可以简化指针修改实参</p><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">//1. 值传递</span>
<span class="line">void mySwap01(int a, int b) {</span>
<span class="line">	int temp = a;</span>
<span class="line">	a = b;</span>
<span class="line">	b = temp;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//2. 地址传递</span>
<span class="line">void mySwap02(int* a, int* b) {</span>
<span class="line">	int temp = *a;</span>
<span class="line">	*a = *b;</span>
<span class="line">	*b = temp;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//3. 引用传递</span>
<span class="line">void mySwap03(int&amp; a, int&amp; b) {</span>
<span class="line">	int temp = a;</span>
<span class="line">	a = b;</span>
<span class="line">	b = temp;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	int a = 10;</span>
<span class="line">	int b = 20;</span>
<span class="line"></span>
<span class="line">	mySwap01(a, b);</span>
<span class="line">	cout &lt;&lt; &quot;a:&quot; &lt;&lt; a &lt;&lt; &quot; b:&quot; &lt;&lt; b &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	mySwap02(&amp;a, &amp;b);</span>
<span class="line">	cout &lt;&lt; &quot;a:&quot; &lt;&lt; a &lt;&lt; &quot; b:&quot; &lt;&lt; b &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	mySwap03(a, b);</span>
<span class="line">	cout &lt;&lt; &quot;a:&quot; &lt;&lt; a &lt;&lt; &quot; b:&quot; &lt;&lt; b &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：通过引用参数产生的效果同按地址传递是一样的。引用的语法更清楚简单</p></blockquote><h3 id="_2-4-引用做函数返回值" tabindex="-1"><a class="header-anchor" href="#_2-4-引用做函数返回值"><span>2.4 引用做函数返回值</span></a></h3><p>作用：引用是可以作为函数的返回值存在的</p><p>注意：<strong>不要返回局部变量引用</strong></p><p>用法：函数调用作为左值</p><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">//返回局部变量引用</span>
<span class="line">int&amp; test01() {</span>
<span class="line">	int a = 10; //局部变量</span>
<span class="line">	return a;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//返回静态变量引用</span>
<span class="line">int&amp; test02() {</span>
<span class="line">	static int a = 20;</span>
<span class="line">	return a;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	//不能返回局部变量的引用</span>
<span class="line">	int&amp; ref = test01();</span>
<span class="line">	cout &lt;&lt; &quot;ref = &quot; &lt;&lt; ref &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; &quot;ref = &quot; &lt;&lt; ref &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	//如果函数做左值，那么必须返回引用</span>
<span class="line">	int&amp; ref2 = test02();</span>
<span class="line">	cout &lt;&lt; &quot;ref2 = &quot; &lt;&lt; ref2 &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; &quot;ref2 = &quot; &lt;&lt; ref2 &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	test02() = 1000;</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; &quot;ref2 = &quot; &lt;&lt; ref2 &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; &quot;ref2 = &quot; &lt;&lt; ref2 &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-引用的本质" tabindex="-1"><a class="header-anchor" href="#_2-5-引用的本质"><span>2.5 引用的本质</span></a></h3><p>本质：<strong>引用的本质在c++内部实现是一个指针常量.</strong></p><p>讲解示例：</p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">//发现是引用，转换为 int* const ref = &amp;a;</span>
<span class="line">void func(int&amp; ref){</span>
<span class="line">	ref = 100; // ref是引用，转换为*ref = 100</span>
<span class="line">}</span>
<span class="line">int main(){</span>
<span class="line">	int a = 10;</span>
<span class="line">    </span>
<span class="line">    //自动转换为 int* const ref = &amp;a; 指针常量是指针指向不可改，也说明为什么引用不可更改</span>
<span class="line">	int&amp; ref = a; </span>
<span class="line">	ref = 20; //内部发现ref是引用，自动帮我们转换为: *ref = 20;</span>
<span class="line">    </span>
<span class="line">	cout &lt;&lt; &quot;a:&quot; &lt;&lt; a &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; &quot;ref:&quot; &lt;&lt; ref &lt;&lt; endl;</span>
<span class="line">    </span>
<span class="line">	func(a);</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：C++推荐用引用技术，因为语法方便，引用本质是指针常量，但是所有的指针操作编译器都帮我们做了</p><h3 id="_2-6-常量引用" tabindex="-1"><a class="header-anchor" href="#_2-6-常量引用"><span>2.6 常量引用</span></a></h3><p>**作用：**常量引用主要用来修饰形参，防止误操作</p><p>在函数形参列表中，可以加==const修饰形参==，防止形参改变实参 #const</p><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">//引用使用的场景，通常用来修饰形参</span>
<span class="line">void showValue(const int&amp; v) {</span>
<span class="line">	//v += 10;</span>
<span class="line">	cout &lt;&lt; v &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	//int&amp; ref = 10;  引用本身需要一个合法的内存空间，因此这行错误</span>
<span class="line">	//加入const就可以了，编译器优化代码，int temp = 10; const int&amp; ref = temp;</span>
<span class="line">	const int&amp; ref = 10;</span>
<span class="line"></span>
<span class="line">	//ref = 100;  //加入const后不可以修改变量</span>
<span class="line">	cout &lt;&lt; ref &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	//函数中利用常量引用防止误操作修改实参</span>
<span class="line">	int a = 10;</span>
<span class="line">	showValue(a);</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-函数提高" tabindex="-1"><a class="header-anchor" href="#_3-函数提高"><span>3 函数提高</span></a></h2><h3 id="_3-1-函数默认参数" tabindex="-1"><a class="header-anchor" href="#_3-1-函数默认参数"><span>3.1 函数默认参数</span></a></h3><p>在C++中，函数的形参列表中的形参是可以有默认值的。</p><p>语法：<code> 返回值类型 函数名 （参数= 默认值）{}</code></p><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">int func(int a, int b = 10, int c = 10) {</span>
<span class="line">	return a + b + c;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//1. 如果某个位置参数有默认值，那么从这个位置往后，从左向右，必须都要有默认值</span>
<span class="line">//2. 如果函数声明有默认值，函数实现的时候就不能有默认参数</span>
<span class="line">int func2(int a = 10, int b = 10);</span>
<span class="line">int func2(int a, int b) {</span>
<span class="line">	return a + b;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; &quot;ret = &quot; &lt;&lt; func(20, 20) &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; &quot;ret = &quot; &lt;&lt; func(100) &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-函数占位参数" tabindex="-1"><a class="header-anchor" href="#_3-2-函数占位参数"><span>3.2 函数占位参数</span></a></h3><p>C++中函数的形参列表里可以有占位参数，用来做占位，调用函数时必须填补该位置</p><p><strong>语法：</strong> <code>返回值类型 函数名 (数据类型){}</code></p><p>在现阶段函数的占位参数存在意义不大，但是后面的课程中会用到该技术</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//函数占位参数 ，占位参数也可以有默认参数</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;this is func&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">func</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//占位参数必须填补</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-函数重载" tabindex="-1"><a class="header-anchor" href="#_3-3-函数重载"><span>3.3 函数重载</span></a></h3><h4 id="_3-3-1-函数重载概述" tabindex="-1"><a class="header-anchor" href="#_3-3-1-函数重载概述"><span>3.3.1 函数重载概述</span></a></h4><p>**作用：**函数名可以相同，提高复用性</p><p><strong>函数重载满足条件：</strong></p><ul><li>同一个作用域下</li><li>函数名称相同</li><li>函数参数<strong>类型不同</strong> 或者 <strong>个数不同</strong> 或者 <strong>顺序不同</strong></li></ul><p><strong>注意:</strong> 函数的返回值不可以作为函数重载的条件</p><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">//函数重载需要函数都在同一个作用域下</span>
<span class="line">void func()</span>
<span class="line">{</span>
<span class="line">	cout &lt;&lt; &quot;func 的调用！&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line">void func(int a)</span>
<span class="line">{</span>
<span class="line">	cout &lt;&lt; &quot;func (int a) 的调用！&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line">void func(double a)</span>
<span class="line">{</span>
<span class="line">	cout &lt;&lt; &quot;func (double a)的调用！&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line">void func(int a ,double b)</span>
<span class="line">{</span>
<span class="line">	cout &lt;&lt; &quot;func (int a ,double b) 的调用！&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line">void func(double a ,int b)</span>
<span class="line">{</span>
<span class="line">	cout &lt;&lt; &quot;func (double a ,int b)的调用！&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//函数返回值不可以作为函数重载条件</span>
<span class="line">//int func(double a, int b)</span>
<span class="line">//{</span>
<span class="line">//	cout &lt;&lt; &quot;func (double a ,int b)的调用！&quot; &lt;&lt; endl;</span>
<span class="line">//}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	func();</span>
<span class="line">	func(10);</span>
<span class="line">	func(3.14);</span>
<span class="line">	func(10,3.14);</span>
<span class="line">	func(3.14 , 10);</span>
<span class="line">	</span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-2-函数重载注意事项" tabindex="-1"><a class="header-anchor" href="#_3-3-2-函数重载注意事项"><span>3.3.2 函数重载注意事项</span></a></h4><ul><li>引用作为重载条件</li><li>函数重载碰到函数默认参数</li></ul><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">//函数重载注意事项</span>
<span class="line">//1、引用作为重载条件</span>
<span class="line"></span>
<span class="line">void func(int &amp;a)</span>
<span class="line">{</span>
<span class="line">	cout &lt;&lt; &quot;func (int &amp;a) 调用 &quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void func(const int &amp;a)</span>
<span class="line">{</span>
<span class="line">	cout &lt;&lt; &quot;func (const int &amp;a) 调用 &quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//2、函数重载碰到函数默认参数</span>
<span class="line"></span>
<span class="line">void func2(int a, int b = 10)</span>
<span class="line">{</span>
<span class="line">	cout &lt;&lt; &quot;func2(int a, int b = 10) 调用&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void func2(int a)</span>
<span class="line">{</span>
<span class="line">	cout &lt;&lt; &quot;func2(int a) 调用&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">	</span>
<span class="line">	int a = 10;</span>
<span class="line">	func(a); //调用无const</span>
<span class="line">	func(10);//调用有const</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	//func2(10); //碰到默认参数产生歧义，需要避免</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-类和对象" tabindex="-1"><a class="header-anchor" href="#_4-类和对象"><span><strong>4</strong> 类和对象</span></a></h2><p>C++面向对象的三大特性为：==封装、继承、多态==</p><p>C++认为==万事万物都皆为对象==，对象上有其属性和行为</p><p><strong>例如：</strong></p><p>​ 人可以作为对象，属性有姓名、年龄、身高、体重...，行为有走、跑、跳、吃饭、唱歌...</p><p>​ 车也可以作为对象，属性有轮胎、方向盘、车灯...,行为有载人、放音乐、放空调...</p><p>​ 具有相同性质的==对象==，我们可以抽象称为==类==，人属于人类，车属于车类</p><h3 id="_4-1-封装" tabindex="-1"><a class="header-anchor" href="#_4-1-封装"><span>4.1 封装</span></a></h3><h4 id="_4-1-1-封装的意义" tabindex="-1"><a class="header-anchor" href="#_4-1-1-封装的意义"><span>4.1.1 封装的意义</span></a></h4><p>封装是C++面向对象三大特性之一</p><p>封装的意义：</p><ul><li>将属性和行为作为一个整体，表现生活中的事物</li><li>将属性和行为加以权限控制</li></ul><p><strong>封装意义一：</strong></p><p>​ 在设计类的时候，属性和行为写在一起，表现事物</p><p><strong>语法：</strong> <code>class 类名{ 访问权限： 属性 / 行为 };</code></p><p>**示例1：**设计一个圆类，求圆的周长</p><p><strong>示例代码：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">//圆周率</span>
<span class="line">const double PI = 3.14;</span>
<span class="line"></span>
<span class="line">//1、封装的意义</span>
<span class="line">//将属性和行为作为一个整体，用来表现生活中的事物</span>
<span class="line"></span>
<span class="line">//封装一个圆类，求圆的周长</span>
<span class="line">//class代表设计一个类，后面跟着的是类名</span>
<span class="line">class Circle</span>
<span class="line">{</span>
<span class="line">public:  //访问权限  公共的权限</span>
<span class="line"></span>
<span class="line">	//属性</span>
<span class="line">	int m_r;//半径</span>
<span class="line"></span>
<span class="line">	//行为</span>
<span class="line">	//获取到圆的周长</span>
<span class="line">	double calculateZC()</span>
<span class="line">	{</span>
<span class="line">		//2 * pi  * r</span>
<span class="line">		//获取圆的周长</span>
<span class="line">		return  2 * PI * m_r;</span>
<span class="line">	}</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	//通过圆类，创建圆的对象</span>
<span class="line">	// c1就是一个具体的圆</span>
<span class="line">	Circle c1;</span>
<span class="line">	c1.m_r = 10; //给圆对象的半径 进行赋值操作</span>
<span class="line"></span>
<span class="line">	//2 * pi * 10 = = 62.8</span>
<span class="line">	cout &lt;&lt; &quot;圆的周长为： &quot; &lt;&lt; c1.calculateZC() &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**示例2：**设计一个学生类，属性有姓名和学号，可以给姓名和学号赋值，可以显示学生的姓名和学号</p><p><strong>示例2代码：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">//学生类</span>
<span class="line">class Student {</span>
<span class="line">public:</span>
<span class="line">	void setName(string name) {</span>
<span class="line">		m_name = name;</span>
<span class="line">	}</span>
<span class="line">	void setID(int id) {</span>
<span class="line">		m_id = id;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	void showStudent() {</span>
<span class="line">		cout &lt;&lt; &quot;name:&quot; &lt;&lt; m_name &lt;&lt; &quot; ID:&quot; &lt;&lt; m_id &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">public:</span>
<span class="line">	string m_name;</span>
<span class="line">	int m_id;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	Student stu;</span>
<span class="line">	stu.setName(&quot;德玛西亚&quot;);</span>
<span class="line">	stu.setID(250);</span>
<span class="line">	stu.showStudent();</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>封装意义二：</strong></p><p>类在设计时，可以把属性和行为放在不同的权限下，加以控制</p><p>访问权限有三种：</p><ol><li>public 公共权限</li><li>protected 保护权限</li><li>private 私有权限</li></ol><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">//三种权限</span>
<span class="line">//公共权限  public     类内可以访问  类外可以访问</span>
<span class="line">//保护权限  protected  类内可以访问  类外不可以访问</span>
<span class="line">//私有权限  private    类内可以访问  类外不可以访问</span>
<span class="line"></span>
<span class="line">class Person</span>
<span class="line">{</span>
<span class="line">	//姓名  公共权限</span>
<span class="line">public:</span>
<span class="line">	string m_Name;</span>
<span class="line"></span>
<span class="line">	//汽车  保护权限</span>
<span class="line">protected:</span>
<span class="line">	string m_Car;</span>
<span class="line"></span>
<span class="line">	//银行卡密码  私有权限</span>
<span class="line">private:</span>
<span class="line">	int m_Password;</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">	void func()</span>
<span class="line">	{</span>
<span class="line">		m_Name = &quot;张三&quot;;</span>
<span class="line">		m_Car = &quot;拖拉机&quot;;</span>
<span class="line">		m_Password = 123456;</span>
<span class="line">	}</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	Person p;</span>
<span class="line">	p.m_Name = &quot;李四&quot;;</span>
<span class="line">	//p.m_Car = &quot;奔驰&quot;;  //保护权限类外访问不到</span>
<span class="line">	//p.m_Password = 123; //私有权限类外访问不到</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-2-struct和class区别" tabindex="-1"><a class="header-anchor" href="#_4-1-2-struct和class区别"><span>4.1.2 struct和class区别</span></a></h4><p>在C++中 struct和class唯一的<strong>区别</strong>就在于 <strong>默认的访问权限不同</strong></p><p>区别：</p><ul><li>struct 默认权限为公共</li><li>class 默认权限为私有</li></ul><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">class C1</span>
<span class="line">{</span>
<span class="line">	int  m_A; //默认是私有权限</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">struct C2</span>
<span class="line">{</span>
<span class="line">	int m_A;  //默认是公共权限</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	C1 c1;</span>
<span class="line">	c1.m_A = 10; //错误，访问权限是私有</span>
<span class="line"></span>
<span class="line">	C2 c2;</span>
<span class="line">	c2.m_A = 10; //正确，访问权限是公共</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-3-成员属性设置为私有" tabindex="-1"><a class="header-anchor" href="#_4-1-3-成员属性设置为私有"><span>4.1.3 成员属性设置为私有</span></a></h4><p>**优点1：**将所有成员属性设置为私有，可以自己控制读写权限</p><p>**优点2：**对于写权限，我们可以检测数据的有效性</p><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">class Person {</span>
<span class="line">public:</span>
<span class="line"></span>
<span class="line">	//姓名设置可读可写</span>
<span class="line">	void setName(string name) {</span>
<span class="line">		m_Name = name;</span>
<span class="line">	}</span>
<span class="line">	string getName()</span>
<span class="line">	{</span>
<span class="line">		return m_Name;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	//获取年龄 </span>
<span class="line">	int getAge() {</span>
<span class="line">		return m_Age;</span>
<span class="line">	}</span>
<span class="line">	//设置年龄</span>
<span class="line">	void setAge(int age) {</span>
<span class="line">		if (age &lt; 0 || age &gt; 150) {</span>
<span class="line">			cout &lt;&lt; &quot;你个老妖精!&quot; &lt;&lt; endl;</span>
<span class="line">			return;</span>
<span class="line">		}</span>
<span class="line">		m_Age = age;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	//情人设置为只写</span>
<span class="line">	void setLover(string lover) {</span>
<span class="line">		m_Lover = lover;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">private:</span>
<span class="line">	string m_Name; //可读可写  姓名</span>
<span class="line">	</span>
<span class="line">	int m_Age; //只读  年龄</span>
<span class="line"></span>
<span class="line">	string m_Lover; //只写  情人</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	Person p;</span>
<span class="line">	//姓名设置</span>
<span class="line">	p.setName(&quot;张三&quot;);</span>
<span class="line">	cout &lt;&lt; &quot;姓名： &quot; &lt;&lt; p.getName() &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	//年龄设置</span>
<span class="line">	p.setAge(50);</span>
<span class="line">	cout &lt;&lt; &quot;年龄： &quot; &lt;&lt; p.getAge() &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	//情人设置</span>
<span class="line">	p.setLover(&quot;苍井&quot;);</span>
<span class="line">	//cout &lt;&lt; &quot;情人： &quot; &lt;&lt; p.m_Lover &lt;&lt; endl;  //只写属性，不可以读取</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>练习案例1：设计立方体类</strong></p><p>设计立方体类(Cube)</p><p>求出立方体的面积和体积</p><p>分别用全局函数和成员函数判断两个立方体是否相等。</p><p><img src="`+t+'" alt=""></p><p><strong>练习案例2：点和圆的关系</strong></p><p>设计一个圆形类（Circle），和一个点类（Point），计算点和圆的关系。</p><p><img src="'+i+`" alt=""></p><h3 id="_4-2-对象的初始化和清理" tabindex="-1"><a class="header-anchor" href="#_4-2-对象的初始化和清理"><span>4.2 对象的初始化和清理</span></a></h3><ul><li>生活中我们买的电子产品都基本会有出厂设置，在某一天我们不用时候也会删除一些自己信息数据保证安全</li><li>C++中的面向对象来源于生活，每个对象也都会有初始设置以及 对象销毁前的清理数据的设置。</li></ul><h4 id="_4-2-1-构造函数和析构函数" tabindex="-1"><a class="header-anchor" href="#_4-2-1-构造函数和析构函数"><span>4.2.1 构造函数和析构函数</span></a></h4><p>对象的<strong>初始化和清理</strong>也是两个非常重要的安全问题</p><p>​ 一个对象或者变量没有初始状态，对其使用后果是未知</p><p>​ 同样的使用完一个对象或变量，没有及时清理，也会造成一定的安全问题</p><p>c++利用了<strong>构造函数</strong>和<strong>析构函数</strong>解决上述问题，这两个函数将会被编译器自动调用，完成对象初始化和清理工作。</p><p>对象的初始化和清理工作是编译器强制要我们做的事情，因此如果<strong>我们不提供构造和析构，编译器会提供</strong></p><p><strong>编译器提供的构造函数和析构函数是空实现。</strong></p><ul><li>构造函数：主要作用在于创建对象时为对象的成员属性赋值，构造函数由编译器自动调用，无须手动调用。</li><li>析构函数：主要作用在于对象<strong>销毁前</strong>系统自动调用，执行一些清理工作。</li></ul><p><strong>构造函数语法：</strong><code>类名(){}</code></p><ol><li>构造函数，没有返回值也不写void</li><li>函数名称与类名相同</li><li>构造函数可以有参数，因此可以发生重载</li><li>程序在调用对象时候会自动调用构造，无须手动调用,而且只会调用一次</li></ol><p><strong>析构函数语法：</strong> <code>~类名(){}</code></p><ol><li>析构函数，没有返回值也不写void</li><li>函数名称与类名相同,在名称前加上符号 ~</li><li>析构函数不可以有参数，因此不可以发生重载</li><li>程序在对象销毁前会自动调用析构，无须手动调用,而且只会调用一次</li></ol><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">class Person</span>
<span class="line">{</span>
<span class="line">public:</span>
<span class="line">	//构造函数</span>
<span class="line">	Person()</span>
<span class="line">	{</span>
<span class="line">		cout &lt;&lt; &quot;Person的构造函数调用&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	//析构函数</span>
<span class="line">	~Person()</span>
<span class="line">	{</span>
<span class="line">		cout &lt;&lt; &quot;Person的析构函数调用&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">void test01()</span>
<span class="line">{</span>
<span class="line">	Person p;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">	</span>
<span class="line">	test01();</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-2-构造函数的分类及调用" tabindex="-1"><a class="header-anchor" href="#_4-2-2-构造函数的分类及调用"><span>4.2.2 构造函数的分类及调用</span></a></h4><p>两种分类方式：</p><p>​ 按参数分为： 有参构造和无参构造</p><p>​ 按类型分为： 普通构造和拷贝构造</p><p>三种调用方式：</p><p>​ 括号法</p><p>​ 显示法</p><p>​ 隐式转换法</p><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">//1、构造函数分类</span>
<span class="line">// 按照参数分类分为 有参和无参构造   无参又称为默认构造函数</span>
<span class="line">// 按照类型分类分为 普通构造和拷贝构造</span>
<span class="line"></span>
<span class="line">class Person {</span>
<span class="line">public:</span>
<span class="line">	//无参（默认）构造函数</span>
<span class="line">	Person() {</span>
<span class="line">		cout &lt;&lt; &quot;无参构造函数!&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	//有参构造函数</span>
<span class="line">	Person(int a) {</span>
<span class="line">		age = a;</span>
<span class="line">		cout &lt;&lt; &quot;有参构造函数!&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	//拷贝构造函数</span>
<span class="line">	Person(const Person&amp; p) {</span>
<span class="line">		age = p.age;</span>
<span class="line">		cout &lt;&lt; &quot;拷贝构造函数!&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	//析构函数</span>
<span class="line">	~Person() {</span>
<span class="line">		cout &lt;&lt; &quot;析构函数!&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">public:</span>
<span class="line">	int age;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">//2、构造函数的调用</span>
<span class="line">//调用无参构造函数</span>
<span class="line">void test01() {</span>
<span class="line">	Person p; //调用无参构造函数</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//调用有参的构造函数</span>
<span class="line">void test02() {</span>
<span class="line"></span>
<span class="line">	//2.1  括号法，常用</span>
<span class="line">	Person p1(10);</span>
<span class="line">	//注意1：调用无参构造函数不能加括号，如果加了编译器认为这是一个函数声明</span>
<span class="line">	//Person p2();</span>
<span class="line"></span>
<span class="line">	//2.2 显式法</span>
<span class="line">	Person p2 = Person(10); </span>
<span class="line">	Person p3 = Person(p2);</span>
<span class="line">	//Person(10)单独写就是匿名对象  当前行结束之后，马上析构</span>
<span class="line"></span>
<span class="line">	//2.3 隐式转换法</span>
<span class="line">	Person p4 = 10; // Person p4 = Person(10); </span>
<span class="line">	Person p5 = p4; // Person p5 = Person(p4); </span>
<span class="line"></span>
<span class="line">	//注意2：不能利用 拷贝构造函数 初始化匿名对象 编译器认为是对象声明</span>
<span class="line">	//Person p5(p4);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	test01();</span>
<span class="line">	//test02();</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-3-拷贝构造函数调用时机" tabindex="-1"><a class="header-anchor" href="#_4-2-3-拷贝构造函数调用时机"><span>4.2.3 拷贝构造函数调用时机</span></a></h4><p>C++中拷贝构造函数调用时机通常有三种情况</p><ul><li>使用一个已经创建完毕的对象来初始化一个新对象</li><li>值传递的方式给函数参数传值</li><li>以值方式返回局部对象</li></ul><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">class Person {</span>
<span class="line">public:</span>
<span class="line">	Person() {</span>
<span class="line">		cout &lt;&lt; &quot;无参构造函数!&quot; &lt;&lt; endl;</span>
<span class="line">		mAge = 0;</span>
<span class="line">	}</span>
<span class="line">	Person(int age) {</span>
<span class="line">		cout &lt;&lt; &quot;有参构造函数!&quot; &lt;&lt; endl;</span>
<span class="line">		mAge = age;</span>
<span class="line">	}</span>
<span class="line">	Person(const Person&amp; p) {</span>
<span class="line">		cout &lt;&lt; &quot;拷贝构造函数!&quot; &lt;&lt; endl;</span>
<span class="line">		mAge = p.mAge;</span>
<span class="line">	}</span>
<span class="line">	//析构函数在释放内存之前调用</span>
<span class="line">	~Person() {</span>
<span class="line">		cout &lt;&lt; &quot;析构函数!&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">public:</span>
<span class="line">	int mAge;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">//1. 使用一个已经创建完毕的对象来初始化一个新对象</span>
<span class="line">void test01() {</span>
<span class="line"></span>
<span class="line">	Person man(100); //p对象已经创建完毕</span>
<span class="line">	Person newman(man); //调用拷贝构造函数</span>
<span class="line">	Person newman2 = man; //拷贝构造</span>
<span class="line"></span>
<span class="line">	//Person newman3;</span>
<span class="line">	//newman3 = man; //不是调用拷贝构造函数，赋值操作</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//2. 值传递的方式给函数参数传值</span>
<span class="line">//相当于Person p1 = p;</span>
<span class="line">void doWork(Person p1) {}</span>
<span class="line">void test02() {</span>
<span class="line">	Person p; //无参构造函数</span>
<span class="line">	doWork(p);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//3. 以值方式返回局部对象</span>
<span class="line">Person doWork2()</span>
<span class="line">{</span>
<span class="line">	Person p1;</span>
<span class="line">	cout &lt;&lt; (int *)&amp;p1 &lt;&lt; endl;</span>
<span class="line">	return p1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void test03()</span>
<span class="line">{</span>
<span class="line">	Person p = doWork2();</span>
<span class="line">	cout &lt;&lt; (int *)&amp;p &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	//test01();</span>
<span class="line">	//test02();</span>
<span class="line">	test03();</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-4-构造函数调用规则" tabindex="-1"><a class="header-anchor" href="#_4-2-4-构造函数调用规则"><span>4.2.4 构造函数调用规则</span></a></h4><p>默认情况下，c++编译器至少给一个类添加3个函数</p><p>1．默认构造函数(无参，函数体为空)</p><p>2．默认析构函数(无参，函数体为空)</p><p>3．默认拷贝构造函数，对属性进行值拷贝</p><p>构造函数调用规则如下：</p><ul><li><p>如果用户定义有参构造函数，c++不在提供默认无参构造，但是会提供默认拷贝构造</p></li><li><p>如果用户定义拷贝构造函数，c++不会再提供其他构造函数</p></li></ul><p>示例：</p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">class Person {</span>
<span class="line">public:</span>
<span class="line">	//无参（默认）构造函数</span>
<span class="line">	Person() {</span>
<span class="line">		cout &lt;&lt; &quot;无参构造函数!&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	//有参构造函数</span>
<span class="line">	Person(int a) {</span>
<span class="line">		age = a;</span>
<span class="line">		cout &lt;&lt; &quot;有参构造函数!&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	//拷贝构造函数</span>
<span class="line">	Person(const Person&amp; p) {</span>
<span class="line">		age = p.age;</span>
<span class="line">		cout &lt;&lt; &quot;拷贝构造函数!&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	//析构函数</span>
<span class="line">	~Person() {</span>
<span class="line">		cout &lt;&lt; &quot;析构函数!&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">public:</span>
<span class="line">	int age;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">void test01()</span>
<span class="line">{</span>
<span class="line">	Person p1(18);</span>
<span class="line">	//如果不写拷贝构造，编译器会自动添加拷贝构造，并且做浅拷贝操作</span>
<span class="line">	Person p2(p1);</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; &quot;p2的年龄为： &quot; &lt;&lt; p2.age &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void test02()</span>
<span class="line">{</span>
<span class="line">	//如果用户提供有参构造，编译器不会提供默认构造，会提供拷贝构造</span>
<span class="line">	Person p1; //此时如果用户自己没有提供默认构造，会出错</span>
<span class="line">	Person p2(10); //用户提供的有参</span>
<span class="line">	Person p3(p2); //此时如果用户没有提供拷贝构造，编译器会提供</span>
<span class="line"></span>
<span class="line">	//如果用户提供拷贝构造，编译器不会提供其他构造函数</span>
<span class="line">	Person p4; //此时如果用户自己没有提供默认构造，会出错</span>
<span class="line">	Person p5(10); //此时如果用户自己没有提供有参，会出错</span>
<span class="line">	Person p6(p5); //用户自己提供拷贝构造</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	test01();</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-5-深拷贝与浅拷贝" tabindex="-1"><a class="header-anchor" href="#_4-2-5-深拷贝与浅拷贝"><span>4.2.5 深拷贝与浅拷贝</span></a></h4><p>深浅拷贝是面试经典问题，也是常见的一个坑</p><p>浅拷贝：简单的赋值拷贝操作</p><p>深拷贝：在堆区重新申请空间，进行拷贝操作</p><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">class Person {</span>
<span class="line">public:</span>
<span class="line">	//无参（默认）构造函数</span>
<span class="line">	Person() {</span>
<span class="line">		cout &lt;&lt; &quot;无参构造函数!&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	//有参构造函数</span>
<span class="line">	Person(int age ,int height) {</span>
<span class="line">		</span>
<span class="line">		cout &lt;&lt; &quot;有参构造函数!&quot; &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">		m_age = age;</span>
<span class="line">		m_height = new int(height);</span>
<span class="line">		</span>
<span class="line">	}</span>
<span class="line">	//拷贝构造函数  </span>
<span class="line">	Person(const Person&amp; p) {</span>
<span class="line">		cout &lt;&lt; &quot;拷贝构造函数!&quot; &lt;&lt; endl;</span>
<span class="line">		//如果不利用深拷贝在堆区创建新内存，会导致浅拷贝带来的重复释放堆区问题</span>
<span class="line">		m_age = p.m_age;</span>
<span class="line">		m_height = new int(*p.m_height);</span>
<span class="line">		</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	//析构函数</span>
<span class="line">	~Person() {</span>
<span class="line">		cout &lt;&lt; &quot;析构函数!&quot; &lt;&lt; endl;</span>
<span class="line">		if (m_height != NULL)</span>
<span class="line">		{</span>
<span class="line">			delete m_height;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">public:</span>
<span class="line">	int m_age;</span>
<span class="line">	int* m_height;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">void test01()</span>
<span class="line">{</span>
<span class="line">	Person p1(18, 180);</span>
<span class="line"></span>
<span class="line">	Person p2(p1);</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; &quot;p1的年龄： &quot; &lt;&lt; p1.m_age &lt;&lt; &quot; 身高： &quot; &lt;&lt; *p1.m_height &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; &quot;p2的年龄： &quot; &lt;&lt; p2.m_age &lt;&lt; &quot; 身高： &quot; &lt;&lt; *p2.m_height &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	test01();</span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：如果属性有在堆区开辟的，一定要自己提供拷贝构造函数，防止浅拷贝带来的问题</p></blockquote><h4 id="_4-2-6-初始化列表" tabindex="-1"><a class="header-anchor" href="#_4-2-6-初始化列表"><span>4.2.6 初始化列表</span></a></h4><p><strong>作用：</strong></p><p>C++提供了初始化列表语法，用来初始化属性</p><p><strong>语法：</strong><code>构造函数()：属性1(值1),属性2（值2）... {}</code></p><p><strong>示例：</strong></p><div class="language-Cpp line-numbers-mode" data-highlighter="prismjs" data-ext="Cpp"><pre><code class="language-Cpp"><span class="line">class Person {</span>
<span class="line">public:</span>
<span class="line"></span>
<span class="line">	////传统方式初始化</span>
<span class="line">	//Person(int a, int b, int c) {</span>
<span class="line">	//	m_A = a;</span>
<span class="line">	//	m_B = b;</span>
<span class="line">	//	m_C = c;</span>
<span class="line">	//}</span>
<span class="line"></span>
<span class="line">	//初始化列表方式初始化</span>
<span class="line">	Person(int a, int b, int c) :m_A(a), m_B(b), m_C(c) {}</span>
<span class="line">	void PrintPerson() {</span>
<span class="line">		cout &lt;&lt; &quot;mA:&quot; &lt;&lt; m_A &lt;&lt; endl;</span>
<span class="line">		cout &lt;&lt; &quot;mB:&quot; &lt;&lt; m_B &lt;&lt; endl;</span>
<span class="line">		cout &lt;&lt; &quot;mC:&quot; &lt;&lt; m_C &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">private:</span>
<span class="line">	int m_A;</span>
<span class="line">	int m_B;</span>
<span class="line">	int m_C;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	Person p(1, 2, 3);</span>
<span class="line">	p.PrintPerson();</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-7-类对象作为类成员" tabindex="-1"><a class="header-anchor" href="#_4-2-7-类对象作为类成员"><span>4.2.7 类对象作为类成员</span></a></h4><p>C++类中的成员可以是另一个类的对象，我们称该成员为 对象成员</p><p>例如：</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">B</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    A a；</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>B类中有对象A作为成员，A为对象成员</p><p>那么当创建B对象时，A与B的构造和析构的顺序是谁先谁后？</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Phone</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Phone</span><span class="token punctuation">(</span>string name<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		m_PhoneName <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Phone构造&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token operator">~</span><span class="token function">Phone</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Phone析构&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	string m_PhoneName<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//初始化列表可以告诉编译器调用哪一个构造函数</span></span>
<span class="line">	<span class="token function">Person</span><span class="token punctuation">(</span>string name<span class="token punctuation">,</span> string pName<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">m_Name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">m_Phone</span><span class="token punctuation">(</span>pName<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Person构造&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token operator">~</span><span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Person析构&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">playGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> m_Name <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; 使用&quot;</span> <span class="token operator">&lt;&lt;</span> m_Phone<span class="token punctuation">.</span>m_PhoneName <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; 牌手机! &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	string m_Name<span class="token punctuation">;</span></span>
<span class="line">	Phone m_Phone<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//当类中成员是其他类对象时，我们称该成员为 对象成员</span></span>
<span class="line">	<span class="token comment">//构造的顺序是 ：先调用对象成员的构造，再调用本类构造</span></span>
<span class="line">	<span class="token comment">//析构顺序与构造相反</span></span>
<span class="line">	Person <span class="token function">p</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;苹果X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	p<span class="token punctuation">.</span><span class="token function">playGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-8-静态成员" tabindex="-1"><a class="header-anchor" href="#_4-2-8-静态成员"><span>4.2.8 静态成员</span></a></h4><p>静态成员就是在成员变量和成员函数前加上关键字static，称为静态成员</p><p>静态成员分为：</p><ul><li>静态成员变量 <ul><li>所有对象共享同一份数据</li><li>在编译阶段分配内存</li><li>类内声明，类外初始化</li></ul></li><li>静态成员函数 <ul><li>所有对象共享同一个函数</li><li>静态成员函数只能访问静态成员变量</li></ul></li></ul><p>**示例1 ：**静态成员变量</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	</span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">int</span> m_A<span class="token punctuation">;</span> <span class="token comment">//静态成员变量</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//静态成员变量特点：</span></span>
<span class="line">	<span class="token comment">//1 在编译阶段分配内存</span></span>
<span class="line">	<span class="token comment">//2 类内声明，类外初始化</span></span>
<span class="line">	<span class="token comment">//3 所有对象共享同一份数据</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">int</span> m_B<span class="token punctuation">;</span> <span class="token comment">//静态成员变量也是有访问权限的</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> Person<span class="token double-colon punctuation">::</span>m_A <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> Person<span class="token double-colon punctuation">::</span>m_B <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//静态成员变量两种访问方式</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//1、通过对象</span></span>
<span class="line">	Person p1<span class="token punctuation">;</span></span>
<span class="line">	p1<span class="token punctuation">.</span>m_A <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;p1.m_A = &quot;</span> <span class="token operator">&lt;&lt;</span> p1<span class="token punctuation">.</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	Person p2<span class="token punctuation">;</span></span>
<span class="line">	p2<span class="token punctuation">.</span>m_A <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;p1.m_A = &quot;</span> <span class="token operator">&lt;&lt;</span> p1<span class="token punctuation">.</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">//共享同一份数据</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;p2.m_A = &quot;</span> <span class="token operator">&lt;&lt;</span> p2<span class="token punctuation">.</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//2、通过类名</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;m_A = &quot;</span> <span class="token operator">&lt;&lt;</span> Person<span class="token double-colon punctuation">::</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//cout &lt;&lt; &quot;m_B = &quot; &lt;&lt; Person::m_B &lt;&lt; endl; //私有权限访问不到</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**示例2：**静态成员函数</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//静态成员函数特点：</span></span>
<span class="line">	<span class="token comment">//1 程序共享一个函数</span></span>
<span class="line">	<span class="token comment">//2 静态成员函数只能访问静态成员变量</span></span>
<span class="line">	</span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;func调用&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">		m_A <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token comment">//m_B = 100; //错误，不可以访问非静态成员变量</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">int</span> m_A<span class="token punctuation">;</span> <span class="token comment">//静态成员变量</span></span>
<span class="line">	<span class="token keyword">int</span> m_B<span class="token punctuation">;</span> <span class="token comment">// </span></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//静态成员函数也是有访问权限的</span></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;func2调用&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> Person<span class="token double-colon punctuation">::</span>m_A <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//静态成员变量两种访问方式</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//1、通过对象</span></span>
<span class="line">	Person p1<span class="token punctuation">;</span></span>
<span class="line">	p1<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//2、通过类名</span></span>
<span class="line">	<span class="token class-name">Person</span><span class="token double-colon punctuation">::</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//Person::func2(); //私有权限访问不到</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-c-对象模型和this指针" tabindex="-1"><a class="header-anchor" href="#_4-3-c-对象模型和this指针"><span>4.3 C++对象模型和this指针</span></a></h3><h4 id="_4-3-1-成员变量和成员函数分开存储" tabindex="-1"><a class="header-anchor" href="#_4-3-1-成员变量和成员函数分开存储"><span>4.3.1 成员变量和成员函数分开存储</span></a></h4><p>在C++中，类内的成员变量和成员函数分开存储</p><p>只有非静态成员变量才属于类的对象上</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		mA <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">//非静态成员变量占对象空间</span></span>
<span class="line">	<span class="token keyword">int</span> mA<span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//静态成员变量不占对象空间</span></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">int</span> mB<span class="token punctuation">;</span> </span>
<span class="line">	<span class="token comment">//函数也不占对象空间，所有函数共享一个函数实例</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;mA:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>mA <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">//静态成员函数也不占对象空间</span></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sfunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-2-this指针概念" tabindex="-1"><a class="header-anchor" href="#_4-3-2-this指针概念"><span>4.3.2 this指针概念</span></a></h4><p>通过4.3.1我们知道在C++中成员变量和成员函数是分开存储的</p><p>每一个非静态成员函数只会诞生一份函数实例，也就是说多个同类型的对象会共用一块代码</p><p>那么问题是：这一块代码是如何区分那个对象调用自己的呢？</p><p>c++通过提供特殊的对象指针，this指针，解决上述问题。<strong>this指针指向被调用的成员函数所属的对象</strong></p><p>this指针是隐含每一个非静态成员函数内的一种指针</p><p>this指针不需要定义，直接使用即可</p><p>this指针的用途：</p><ul><li>当形参和成员变量同名时，可用this指针来区分</li><li>在类的非静态成员函数中返回对象本身，可使用return *this</li></ul><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">Person</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">//1、当形参和成员变量同名时，可用this指针来区分</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token operator">-&gt;</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	Person<span class="token operator">&amp;</span> <span class="token function">PersonAddPerson</span><span class="token punctuation">(</span>Person p<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token operator">-&gt;</span>age <span class="token operator">+=</span> p<span class="token punctuation">.</span>age<span class="token punctuation">;</span></span>
<span class="line">		<span class="token comment">//返回对象本身</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">int</span> age<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	Person <span class="token function">p1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;p1.age = &quot;</span> <span class="token operator">&lt;&lt;</span> p1<span class="token punctuation">.</span>age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	Person <span class="token function">p2</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	p2<span class="token punctuation">.</span><span class="token function">PersonAddPerson</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">PersonAddPerson</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">PersonAddPerson</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;p2.age = &quot;</span> <span class="token operator">&lt;&lt;</span> p2<span class="token punctuation">.</span>age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-3-空指针访问成员函数" tabindex="-1"><a class="header-anchor" href="#_4-3-3-空指针访问成员函数"><span>4.3.3 空指针访问成员函数</span></a></h4><p>C++中空指针也是可以调用成员函数的，但是也要注意有没有用到this指针</p><p>如果用到this指针，需要加以判断保证代码的健壮性</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//空指针访问成员函数</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">ShowClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;我是Person类!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">ShowPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> mAge <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> mAge<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	Person <span class="token operator">*</span> p <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span></span>
<span class="line">	p<span class="token operator">-&gt;</span><span class="token function">ShowClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//空指针，可以调用成员函数</span></span>
<span class="line">	p<span class="token operator">-&gt;</span><span class="token function">ShowPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//但是如果成员函数中用到了this指针，就不可以了</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-4-const修饰成员函数" tabindex="-1"><a class="header-anchor" href="#_4-3-4-const修饰成员函数"><span>4.3.4 const修饰成员函数</span></a></h4><p><strong>常函数：</strong></p><ul><li>成员函数后加const后我们称为这个函数为<strong>常函数</strong></li><li>常函数内不可以修改成员属性</li><li>成员属性声明时加关键字mutable后，在常函数中依然可以修改</li></ul><p><strong>常对象：</strong></p><ul><li>声明对象前加const称该对象为常对象</li><li>常对象只能调用常函数</li></ul><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		m_A <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">		m_B <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//this指针的本质是一个指针常量，指针的指向不可修改</span></span>
<span class="line">	<span class="token comment">//如果想让指针指向的值也不可以修改，需要声明常函数</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">ShowPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">//const Type* const pointer;</span></span>
<span class="line">		<span class="token comment">//this = NULL; //不能修改指针的指向 Person* const this;</span></span>
<span class="line">		<span class="token comment">//this-&gt;mA = 100; //但是this指针指向的对象的数据是可以修改的</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">//const修饰成员函数，表示指针指向的内存空间的数据不能修改，除了mutable修饰的变量</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_B <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">MyFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">//mA = 10000;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">mutable</span> <span class="token keyword">int</span> m_B<span class="token punctuation">;</span> <span class="token comment">//可修改 可变的</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">//const修饰对象  常对象</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> Person person<span class="token punctuation">;</span> <span class="token comment">//常量对象  </span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> person<span class="token punctuation">.</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//person.mA = 100; //常对象不能修改成员变量的值,但是可以访问</span></span>
<span class="line">	person<span class="token punctuation">.</span>m_B <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">//但是常对象可以修改mutable修饰成员变量</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//常对象访问成员函数</span></span>
<span class="line">	person<span class="token punctuation">.</span><span class="token function">MyFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//常对象只能调用const的函数</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-友元" tabindex="-1"><a class="header-anchor" href="#_4-4-友元"><span>4.4 友元</span></a></h3><p>生活中你的家有客厅(Public)，有你的卧室(Private)</p><p>客厅所有来的客人都可以进去，但是你的卧室是私有的，也就是说只有你能进去</p><p>但是呢，你也可以允许你的好闺蜜好基友进去。</p><p>在程序里，有些私有属性 也想让类外特殊的一些函数或者类进行访问，就需要用到友元的技术</p><p>友元的目的就是让一个函数或者类 访问另一个类中私有成员</p><p>友元的关键字为 ==friend==</p><p>友元的三种实现</p><ul><li>全局函数做友元</li><li>类做友元</li><li>成员函数做友元</li></ul><h4 id="_4-4-1-全局函数做友元" tabindex="-1"><a class="header-anchor" href="#_4-4-1-全局函数做友元"><span>4.4.1 全局函数做友元</span></a></h4><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Building</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//告诉编译器 goodGay全局函数 是 Building类的好朋友，可以访问类中的私有内容</span></span>
<span class="line">	<span class="token keyword">friend</span> <span class="token keyword">void</span> <span class="token function">goodGay</span><span class="token punctuation">(</span>Building <span class="token operator">*</span> building<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">Building</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_SittingRoom <span class="token operator">=</span> <span class="token string">&quot;客厅&quot;</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_BedRoom <span class="token operator">=</span> <span class="token string">&quot;卧室&quot;</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	string m_SittingRoom<span class="token punctuation">;</span> <span class="token comment">//客厅</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">	string m_BedRoom<span class="token punctuation">;</span> <span class="token comment">//卧室</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">goodGay</span><span class="token punctuation">(</span>Building <span class="token operator">*</span> building<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;好基友正在访问： &quot;</span> <span class="token operator">&lt;&lt;</span> building<span class="token operator">-&gt;</span>m_SittingRoom <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;好基友正在访问： &quot;</span> <span class="token operator">&lt;&lt;</span> building<span class="token operator">-&gt;</span>m_BedRoom <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	Building b<span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">goodGay</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-2-类做友元" tabindex="-1"><a class="header-anchor" href="#_4-4-2-类做友元"><span>4.4.2 类做友元</span></a></h4><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Building</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">goodGay</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">goodGay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">	Building <span class="token operator">*</span>building<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Building</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//告诉编译器 goodGay类是Building类的好朋友，可以访问到Building类中私有内容</span></span>
<span class="line">	<span class="token keyword">friend</span> <span class="token keyword">class</span> <span class="token class-name">goodGay</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Building</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	string m_SittingRoom<span class="token punctuation">;</span> <span class="token comment">//客厅</span></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">	string m_BedRoom<span class="token punctuation">;</span><span class="token comment">//卧室</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Building</span><span class="token double-colon punctuation">::</span><span class="token function">Building</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_SittingRoom <span class="token operator">=</span> <span class="token string">&quot;客厅&quot;</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_BedRoom <span class="token operator">=</span> <span class="token string">&quot;卧室&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">goodGay<span class="token double-colon punctuation">::</span><span class="token function">goodGay</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	building <span class="token operator">=</span> <span class="token keyword">new</span> Building<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> goodGay<span class="token double-colon punctuation">::</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;好基友正在访问&quot;</span> <span class="token operator">&lt;&lt;</span> building<span class="token operator">-&gt;</span>m_SittingRoom <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;好基友正在访问&quot;</span> <span class="token operator">&lt;&lt;</span> building<span class="token operator">-&gt;</span>m_BedRoom <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	goodGay gg<span class="token punctuation">;</span></span>
<span class="line">	gg<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-3-成员函数做友元" tabindex="-1"><a class="header-anchor" href="#_4-4-3-成员函数做友元"><span>4.4.3 成员函数做友元</span></a></h4><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Building</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">goodGay</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">goodGay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//只让visit函数作为Building的好朋友，可以发访问Building中私有内容</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">visit2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">	Building <span class="token operator">*</span>building<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Building</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//告诉编译器  goodGay类中的visit成员函数 是Building好朋友，可以访问私有内容</span></span>
<span class="line">	<span class="token keyword">friend</span> <span class="token keyword">void</span> goodGay<span class="token double-colon punctuation">::</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Building</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	string m_SittingRoom<span class="token punctuation">;</span> <span class="token comment">//客厅</span></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">	string m_BedRoom<span class="token punctuation">;</span><span class="token comment">//卧室</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Building</span><span class="token double-colon punctuation">::</span><span class="token function">Building</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_SittingRoom <span class="token operator">=</span> <span class="token string">&quot;客厅&quot;</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_BedRoom <span class="token operator">=</span> <span class="token string">&quot;卧室&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">goodGay<span class="token double-colon punctuation">::</span><span class="token function">goodGay</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	building <span class="token operator">=</span> <span class="token keyword">new</span> Building<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> goodGay<span class="token double-colon punctuation">::</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;好基友正在访问&quot;</span> <span class="token operator">&lt;&lt;</span> building<span class="token operator">-&gt;</span>m_SittingRoom <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;好基友正在访问&quot;</span> <span class="token operator">&lt;&lt;</span> building<span class="token operator">-&gt;</span>m_BedRoom <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> goodGay<span class="token double-colon punctuation">::</span><span class="token function">visit2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;好基友正在访问&quot;</span> <span class="token operator">&lt;&lt;</span> building<span class="token operator">-&gt;</span>m_SittingRoom <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//cout &lt;&lt; &quot;好基友正在访问&quot; &lt;&lt; building-&gt;m_BedRoom &lt;&lt; endl;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	goodGay  gg<span class="token punctuation">;</span></span>
<span class="line">	gg<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-运算符重载" tabindex="-1"><a class="header-anchor" href="#_4-5-运算符重载"><span>4.5 运算符重载</span></a></h3><p>运算符重载概念：对已有的运算符重新进行定义，赋予其另一种功能，以适应不同的数据类型</p><h4 id="_4-5-1-加号运算符重载" tabindex="-1"><a class="header-anchor" href="#_4-5-1-加号运算符重载"><span>4.5.1 加号运算符重载</span></a></h4><p>作用：实现两个自定义数据类型相加的运算</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">Person</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_A <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_B <span class="token operator">=</span> b<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">//成员函数实现 + 号运算符重载</span></span>
<span class="line">	Person <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Person<span class="token operator">&amp;</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		Person temp<span class="token punctuation">;</span></span>
<span class="line">		temp<span class="token punctuation">.</span>m_A <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>m_A <span class="token operator">+</span> p<span class="token punctuation">.</span>m_A<span class="token punctuation">;</span></span>
<span class="line">		temp<span class="token punctuation">.</span>m_B <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>m_B <span class="token operator">+</span> p<span class="token punctuation">.</span>m_B<span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">return</span> temp<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> m_B<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//全局函数实现 + 号运算符重载</span></span>
<span class="line"><span class="token comment">//Person operator+(const Person&amp; p1, const Person&amp; p2) {</span></span>
<span class="line"><span class="token comment">//	Person temp(0, 0);</span></span>
<span class="line"><span class="token comment">//	temp.m_A = p1.m_A + p2.m_A;</span></span>
<span class="line"><span class="token comment">//	temp.m_B = p1.m_B + p2.m_B;</span></span>
<span class="line"><span class="token comment">//	return temp;</span></span>
<span class="line"><span class="token comment">//}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//运算符重载 可以发生函数重载 </span></span>
<span class="line">Person <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Person<span class="token operator">&amp;</span> p2<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span>  </span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	Person temp<span class="token punctuation">;</span></span>
<span class="line">	temp<span class="token punctuation">.</span>m_A <span class="token operator">=</span> p2<span class="token punctuation">.</span>m_A <span class="token operator">+</span> val<span class="token punctuation">;</span></span>
<span class="line">	temp<span class="token punctuation">.</span>m_B <span class="token operator">=</span> p2<span class="token punctuation">.</span>m_B <span class="token operator">+</span> val<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	Person <span class="token function">p1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	Person <span class="token function">p2</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//成员函数方式</span></span>
<span class="line">	Person p3 <span class="token operator">=</span> p2 <span class="token operator">+</span> p1<span class="token punctuation">;</span>  <span class="token comment">//相当于 p2.operaor+(p1)</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;mA:&quot;</span> <span class="token operator">&lt;&lt;</span> p3<span class="token punctuation">.</span>m_A <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; mB:&quot;</span> <span class="token operator">&lt;&lt;</span> p3<span class="token punctuation">.</span>m_B <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	Person p4 <span class="token operator">=</span> p3 <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//相当于 operator+(p3,10)</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;mA:&quot;</span> <span class="token operator">&lt;&lt;</span> p4<span class="token punctuation">.</span>m_A <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; mB:&quot;</span> <span class="token operator">&lt;&lt;</span> p4<span class="token punctuation">.</span>m_B <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结1：对于内置的数据类型的表达式的的运算符是不可能改变的</p></blockquote><blockquote><p>总结2：不要滥用运算符重载</p></blockquote><h4 id="_4-5-2-左移运算符重载" tabindex="-1"><a class="header-anchor" href="#_4-5-2-左移运算符重载"><span>4.5.2 左移运算符重载</span></a></h4><p>作用：可以输出自定义数据类型</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">friend</span> ostream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>ostream<span class="token operator">&amp;</span> out<span class="token punctuation">,</span> Person<span class="token operator">&amp;</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">Person</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_A <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_B <span class="token operator">=</span> b<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//成员函数 实现不了  p &lt;&lt; cout 不是我们想要的效果</span></span>
<span class="line">	<span class="token comment">//void operator&lt;&lt;(Person&amp; p){</span></span>
<span class="line">	<span class="token comment">//}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> m_B<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//全局函数实现左移重载</span></span>
<span class="line"><span class="token comment">//ostream对象只能有一个</span></span>
<span class="line">ostream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>ostream<span class="token operator">&amp;</span> out<span class="token punctuation">,</span> Person<span class="token operator">&amp;</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	out <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a:&quot;</span> <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">.</span>m_A <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; b:&quot;</span> <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">.</span>m_B<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> out<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	Person <span class="token function">p1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> p1 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">//链式编程</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：重载左移运算符配合友元可以实现输出自定义数据类型</p></blockquote><h4 id="_4-5-3-递增运算符重载" tabindex="-1"><a class="header-anchor" href="#_4-5-3-递增运算符重载"><span>4.5.3 递增运算符重载</span></a></h4><p>作用： 通过重载递增运算符，实现自己的整型数据</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyInteger</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">friend</span> ostream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>ostream<span class="token operator">&amp;</span> out<span class="token punctuation">,</span> MyInteger myint<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">MyInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		m_Num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">//前置++</span></span>
<span class="line">	MyInteger<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">//先++</span></span>
<span class="line">		m_Num<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token comment">//再返回</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//后置++</span></span>
<span class="line">	MyInteger <span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">//先返回</span></span>
<span class="line">		MyInteger temp <span class="token operator">=</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">//记录当前本身的值，然后让本身的值加1，但是返回的是以前的值，达到先返回后++；</span></span>
<span class="line">		m_Num<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">return</span> temp<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_Num<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">ostream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>ostream<span class="token operator">&amp;</span> out<span class="token punctuation">,</span> MyInteger myint<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	out <span class="token operator">&lt;&lt;</span> myint<span class="token punctuation">.</span>m_Num<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> out<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">//前置++ 先++ 再返回</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	MyInteger myInt<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">++</span>myInt <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> myInt <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//后置++ 先返回 再++</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	MyInteger myInt<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> myInt<span class="token operator">++</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> myInt <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//test02();</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结： 前置递增返回引用，后置递增返回值</p></blockquote><h4 id="_4-5-4-赋值运算符重载" tabindex="-1"><a class="header-anchor" href="#_4-5-4-赋值运算符重载"><span>4.5.4 赋值运算符重载</span></a></h4><p>c++编译器至少给一个类添加4个函数</p><ol><li>默认构造函数(无参，函数体为空)</li><li>默认析构函数(无参，函数体为空)</li><li>默认拷贝构造函数，对属性进行值拷贝</li><li>赋值运算符 operator=, 对属性进行值拷贝</li></ol><p>如果类中有属性指向堆区，做赋值操作时也会出现深浅拷贝问题</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">Person</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">//将年龄数据开辟到堆区</span></span>
<span class="line">		m_Age <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//重载赋值运算符 </span></span>
<span class="line">	Person<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span>Person <span class="token operator">&amp;</span>p<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span>m_Age <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">delete</span> m_Age<span class="token punctuation">;</span></span>
<span class="line">			m_Age <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token comment">//编译器提供的代码是浅拷贝</span></span>
<span class="line">		<span class="token comment">//m_Age = p.m_Age;</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">//提供深拷贝 解决浅拷贝的问题</span></span>
<span class="line">		m_Age <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">.</span>m_Age<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">//返回自身</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	<span class="token operator">~</span><span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span>m_Age <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">delete</span> m_Age<span class="token punctuation">;</span></span>
<span class="line">			m_Age <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//年龄的指针</span></span>
<span class="line">	<span class="token keyword">int</span> <span class="token operator">*</span>m_Age<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	Person <span class="token function">p1</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	Person <span class="token function">p2</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	Person <span class="token function">p3</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	p3 <span class="token operator">=</span> p2 <span class="token operator">=</span> p1<span class="token punctuation">;</span> <span class="token comment">//赋值操作</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;p1的年龄为：&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p1<span class="token punctuation">.</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;p2的年龄为：&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p2<span class="token punctuation">.</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;p3的年龄为：&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p3<span class="token punctuation">.</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//int a = 10;</span></span>
<span class="line">	<span class="token comment">//int b = 20;</span></span>
<span class="line">	<span class="token comment">//int c = 30;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//c = b = a;</span></span>
<span class="line">	<span class="token comment">//cout &lt;&lt; &quot;a = &quot; &lt;&lt; a &lt;&lt; endl;</span></span>
<span class="line">	<span class="token comment">//cout &lt;&lt; &quot;b = &quot; &lt;&lt; b &lt;&lt; endl;</span></span>
<span class="line">	<span class="token comment">//cout &lt;&lt; &quot;c = &quot; &lt;&lt; c &lt;&lt; endl;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-5-关系运算符重载" tabindex="-1"><a class="header-anchor" href="#_4-5-5-关系运算符重载"><span>4.5.5 关系运算符重载</span></a></h4><p>**作用：**重载关系运算符，可以让两个自定义类型对象进行对比操作</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Person</span><span class="token punctuation">(</span>string name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token operator">==</span><span class="token punctuation">(</span>Person <span class="token operator">&amp;</span> p<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Name <span class="token operator">==</span> p<span class="token punctuation">.</span>m_Name <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Age <span class="token operator">==</span> p<span class="token punctuation">.</span>m_Age<span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token keyword">else</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token operator">!=</span><span class="token punctuation">(</span>Person <span class="token operator">&amp;</span> p<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Name <span class="token operator">==</span> p<span class="token punctuation">.</span>m_Name <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Age <span class="token operator">==</span> p<span class="token punctuation">.</span>m_Age<span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token keyword">else</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	string m_Name<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> m_Age<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//int a = 0;</span></span>
<span class="line">	<span class="token comment">//int b = 0;</span></span>
<span class="line"></span>
<span class="line">	Person <span class="token function">a</span><span class="token punctuation">(</span><span class="token string">&quot;孙悟空&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	Person <span class="token function">b</span><span class="token punctuation">(</span><span class="token string">&quot;孙悟空&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a和b相等&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">else</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a和b不相等&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">!=</span> b<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a和b不相等&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">else</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a和b相等&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-6-函数调用运算符重载" tabindex="-1"><a class="header-anchor" href="#_4-5-6-函数调用运算符重载"><span>4.5.6 函数调用运算符重载</span></a></h4><ul><li>函数调用运算符 () 也可以重载</li><li>由于重载后使用的方式非常像函数的调用，因此称为仿函数</li><li>仿函数没有固定写法，非常灵活</li></ul><p>#匿名对象调用</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">MyPrint</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token keyword">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>string text<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> text <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//重载的（）操作符 也称为仿函数</span></span>
<span class="line">	MyPrint myFunc<span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyAdd</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> <span class="token keyword">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span> v1<span class="token punctuation">,</span> <span class="token keyword">int</span> v2<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> v1 <span class="token operator">+</span> v2<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	MyAdd add<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;ret = &quot;</span> <span class="token operator">&lt;&lt;</span> ret <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//匿名对象调用  </span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;MyAdd()(100,100) = &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token function">MyAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-继承" tabindex="-1"><a class="header-anchor" href="#_4-6-继承"><span>4.6 继承</span></a></h3><p><strong>继承是面向对象三大特性之一</strong></p><p>有些类与类之间存在特殊的关系，例如下图中：</p><p><img src="`+c+`" alt=""></p><p>我们发现，定义这些类时，下级别的成员除了拥有上一级的共性，还有自己的特性。</p><p>这个时候我们就可以考虑利用继承的技术，减少重复代码</p><h4 id="_4-6-1-继承的基本语法" tabindex="-1"><a class="header-anchor" href="#_4-6-1-继承的基本语法"><span>4.6.1 继承的基本语法</span></a></h4><p>例如我们看到很多网站中，都有公共的头部，公共的底部，甚至公共的左侧列表，只有中心内容不同</p><p>接下来我们分别利用普通写法和继承的写法来实现网页中的内容，看一下继承存在的意义以及好处</p><p><strong>普通实现：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//Java页面</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Java</span> </span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;首页、公开课、登录、注册...（公共头部）&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;帮助中心、交流合作、站内地图...(公共底部)&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Java,Python,C++...(公共分类列表)&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;JAVA学科视频&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//Python页面</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Python</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;首页、公开课、登录、注册...（公共头部）&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;帮助中心、交流合作、站内地图...(公共底部)&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Java,Python,C++...(公共分类列表)&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Python学科视频&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//C++页面</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">CPP</span> </span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;首页、公开课、登录、注册...（公共头部）&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;帮助中心、交流合作、站内地图...(公共底部)&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Java,Python,C++...(公共分类列表)&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;C++学科视频&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//Java页面</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Java下载视频页面如下： &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	Java ja<span class="token punctuation">;</span></span>
<span class="line">	ja<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	ja<span class="token punctuation">.</span><span class="token function">footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	ja<span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	ja<span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;--------------------&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//Python页面</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Python下载视频页面如下： &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	Python py<span class="token punctuation">;</span></span>
<span class="line">	py<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	py<span class="token punctuation">.</span><span class="token function">footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	py<span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	py<span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;--------------------&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//C++页面</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;C++下载视频页面如下： &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	CPP cp<span class="token punctuation">;</span></span>
<span class="line">	cp<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cp<span class="token punctuation">.</span><span class="token function">footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cp<span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cp<span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>继承实现：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//公共页面</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">BasePage</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;首页、公开课、登录、注册...（公共头部）&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;帮助中心、交流合作、站内地图...(公共底部)&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Java,Python,C++...(公共分类列表)&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//Java页面</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Java</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">BasePage</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;JAVA学科视频&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//Python页面</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Python</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">BasePage</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Python学科视频&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//C++页面</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">CPP</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">BasePage</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;C++学科视频&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//Java页面</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Java下载视频页面如下： &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	Java ja<span class="token punctuation">;</span></span>
<span class="line">	ja<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	ja<span class="token punctuation">.</span><span class="token function">footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	ja<span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	ja<span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;--------------------&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//Python页面</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Python下载视频页面如下： &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	Python py<span class="token punctuation">;</span></span>
<span class="line">	py<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	py<span class="token punctuation">.</span><span class="token function">footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	py<span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	py<span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;--------------------&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//C++页面</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;C++下载视频页面如下： &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	CPP cp<span class="token punctuation">;</span></span>
<span class="line">	cp<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cp<span class="token punctuation">.</span><span class="token function">footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cp<span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cp<span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><p>继承的好处：==可以减少重复的代码==</p><p>class A : public B;</p><p>A 类称为子类 或 派生类</p><p>B 类称为父类 或 基类</p><p><strong>派生类中的成员，包含两大部分</strong>：</p><p>一类是从基类继承过来的，一类是自己增加的成员。</p><p>从基类继承过过来的表现其共性，而新增的成员体现了其个性。</p><h4 id="_4-6-2-继承方式" tabindex="-1"><a class="header-anchor" href="#_4-6-2-继承方式"><span>4.6.2 继承方式</span></a></h4><p>继承的语法：<code>class 子类 : 继承方式 父类</code></p><p><strong>继承方式一共有三种：</strong></p><ul><li>公共继承</li><li>保护继承</li><li>私有继承</li></ul><p><img src="`+o+`" alt=""></p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Base1</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span> </span>
<span class="line">	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">protected</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_B<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_C<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//公共继承</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Son1</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Base1</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		m_A<span class="token punctuation">;</span> <span class="token comment">//可访问 public权限</span></span>
<span class="line">		m_B<span class="token punctuation">;</span> <span class="token comment">//可访问 protected权限</span></span>
<span class="line">		<span class="token comment">//m_C; //不可访问</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">myClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	Son1 s1<span class="token punctuation">;</span></span>
<span class="line">	s1<span class="token punctuation">.</span>m_A<span class="token punctuation">;</span> <span class="token comment">//其他类只能访问到公共权限</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//保护继承</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Base2</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">protected</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_B<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_C<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Son2</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">protected</span> <span class="token class-name">Base2</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		m_A<span class="token punctuation">;</span> <span class="token comment">//可访问 protected权限</span></span>
<span class="line">		m_B<span class="token punctuation">;</span> <span class="token comment">//可访问 protected权限</span></span>
<span class="line">		<span class="token comment">//m_C; //不可访问</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">myClass2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	Son2 s<span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//s.m_A; //不可访问</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//私有继承</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Base3</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">protected</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_B<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_C<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Son3</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">private</span> <span class="token class-name">Base3</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		m_A<span class="token punctuation">;</span> <span class="token comment">//可访问 private权限</span></span>
<span class="line">		m_B<span class="token punctuation">;</span> <span class="token comment">//可访问 private权限</span></span>
<span class="line">		<span class="token comment">//m_C; //不可访问</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">GrandSon3</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Son3</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">//Son3是私有继承，所以继承Son3的属性在GrandSon3中都无法访问到</span></span>
<span class="line">		<span class="token comment">//m_A;</span></span>
<span class="line">		<span class="token comment">//m_B;</span></span>
<span class="line">		<span class="token comment">//m_C;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-3-继承中的对象模型" tabindex="-1"><a class="header-anchor" href="#_4-6-3-继承中的对象模型"><span>4.6.3 继承中的对象模型</span></a></h4><p>**问题：**从父类继承过来的成员，哪些属于子类对象中？</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Base</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">protected</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_B<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_C<span class="token punctuation">;</span> <span class="token comment">//私有成员只是被隐藏了，但是还是会继承下去</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//公共继承</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Base</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_D<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;sizeof Son = &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>Son<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用工具查看：</p><p><img src="`+u+'" alt=""></p><p>打开工具窗口后，定位到当前CPP文件的盘符</p><p>然后输入： cl /d1 reportSingleClassLayout查看的类名 所属文件名</p><p>效果如下图：</p><p><img src="'+d+`" alt=""></p><blockquote><p>结论： 父类中私有成员也是被子类继承下去了，只是由编译器给隐藏后访问不到</p></blockquote><h4 id="_4-6-4-继承中构造和析构顺序" tabindex="-1"><a class="header-anchor" href="#_4-6-4-继承中构造和析构顺序"><span>4.6.4 继承中构造和析构顺序</span></a></h4><p>子类继承父类后，当创建子类对象，也会调用父类的构造函数</p><p>问题：父类和子类的构造和析构顺序是谁先谁后？</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Base</span> </span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Base构造函数!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token operator">~</span><span class="token function">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Base析构函数!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Base</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Son构造函数!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token operator">~</span><span class="token function">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Son析构函数!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//继承中 先调用父类构造函数，再调用子类构造函数，析构顺序与构造相反</span></span>
<span class="line">	Son s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：继承中 先调用父类构造函数，再调用子类构造函数，析构顺序与构造相反</p></blockquote><h4 id="_4-6-5-继承同名成员处理方式" tabindex="-1"><a class="header-anchor" href="#_4-6-5-继承同名成员处理方式"><span>4.6.5 继承同名成员处理方式</span></a></h4><p>问题：当子类与父类出现同名的成员，如何通过子类对象，访问到子类或父类中同名的数据呢？</p><ul><li>访问子类同名成员 直接访问即可</li><li>访问父类同名成员 需要加作用域</li></ul><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		m_A <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Base - func()调用&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Base - func(int a)调用&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Base</span></span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		m_A <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//当子类与父类拥有同名的成员函数，子类会隐藏父类中所有版本的同名成员函数</span></span>
<span class="line">	<span class="token comment">//如果想访问父类中被隐藏的同名成员函数，需要加父类的作用域</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Son - func()调用&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	Son s<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Son下的m_A = &quot;</span> <span class="token operator">&lt;&lt;</span> s<span class="token punctuation">.</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Base下的m_A = &quot;</span> <span class="token operator">&lt;&lt;</span> s<span class="token punctuation">.</span>Base<span class="token double-colon punctuation">::</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	s<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	s<span class="token punctuation">.</span><span class="token class-name">Base</span><span class="token double-colon punctuation">::</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	s<span class="token punctuation">.</span><span class="token class-name">Base</span><span class="token double-colon punctuation">::</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> EXIT_SUCCESS<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>子类对象可以直接访问到子类中同名成员</li><li>子类对象加作用域可以访问到父类同名成员</li><li>当子类与父类拥有同名的成员函数，子类会隐藏父类中同名成员函数，加作用域可以访问到父类中同名函数</li></ol><h4 id="_4-6-6-继承同名静态成员处理方式" tabindex="-1"><a class="header-anchor" href="#_4-6-6-继承同名静态成员处理方式"><span>4.6.6 继承同名静态成员处理方式</span></a></h4><p>问题：继承中同名的静态成员在子类对象上如何进行访问？</p><p>静态成员和非静态成员出现同名，处理方式一致</p><ul><li>访问子类同名成员 直接访问即可</li><li>访问父类同名成员 需要加作用域</li></ul><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Base - static void func()&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Base - static void func(int a)&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> Base<span class="token double-colon punctuation">::</span>m_A <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Base</span></span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Son - static void func()&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> Son<span class="token double-colon punctuation">::</span>m_A <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//同名成员属性</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//通过对象访问</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;通过对象访问： &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	Son s<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Son  下 m_A = &quot;</span> <span class="token operator">&lt;&lt;</span> s<span class="token punctuation">.</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Base 下 m_A = &quot;</span> <span class="token operator">&lt;&lt;</span> s<span class="token punctuation">.</span>Base<span class="token double-colon punctuation">::</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//通过类名访问</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;通过类名访问： &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Son  下 m_A = &quot;</span> <span class="token operator">&lt;&lt;</span> Son<span class="token double-colon punctuation">::</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Base 下 m_A = &quot;</span> <span class="token operator">&lt;&lt;</span> Son<span class="token double-colon punctuation">::</span>Base<span class="token double-colon punctuation">::</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//同名成员函数</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//通过对象访问</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;通过对象访问： &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	Son s<span class="token punctuation">;</span></span>
<span class="line">	s<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	s<span class="token punctuation">.</span><span class="token class-name">Base</span><span class="token double-colon punctuation">::</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;通过类名访问： &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token class-name">Son</span><span class="token double-colon punctuation">::</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	Son<span class="token double-colon punctuation">::</span><span class="token class-name">Base</span><span class="token double-colon punctuation">::</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//出现同名，子类会隐藏掉父类中所有同名成员函数，需要加作作用域访问</span></span>
<span class="line">	Son<span class="token double-colon punctuation">::</span><span class="token class-name">Base</span><span class="token double-colon punctuation">::</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//test01();</span></span>
<span class="line">	<span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：同名静态成员处理方式和非静态处理方式一样，只不过有两种访问的方式（通过对象 和 通过类名）</p></blockquote><h4 id="_4-6-7-多继承语法" tabindex="-1"><a class="header-anchor" href="#_4-6-7-多继承语法"><span>4.6.7 多继承语法</span></a></h4><p>C++允许<strong>一个类继承多个类</strong></p><p>语法：<code> class 子类 ：继承方式 父类1 ， 继承方式 父类2...</code></p><p>多继承可能会引发父类中有同名成员出现，需要加作用域区分</p><p><strong>C++实际开发中不建议用多继承</strong></p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Base1</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Base1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		m_A <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Base2</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Base2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		m_A <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>  <span class="token comment">//开始是m_B 不会出问题，但是改为mA就会出现不明确</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//语法：class 子类：继承方式 父类1 ，继承方式 父类2 </span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Base2</span><span class="token punctuation">,</span> <span class="token keyword">public</span> <span class="token class-name">Base1</span></span> </span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		m_C <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span></span>
<span class="line">		m_D <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_C<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> m_D<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">//多继承容易产生成员同名的情况</span></span>
<span class="line"><span class="token comment">//通过使用类名作用域可以区分调用哪一个基类的成员</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	Son s<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;sizeof Son = &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> s<span class="token punctuation">.</span>Base1<span class="token double-colon punctuation">::</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> s<span class="token punctuation">.</span>Base2<span class="token double-colon punctuation">::</span>m_A <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结： 多继承中如果父类中出现了同名情况，子类使用时候要加作用域</p></blockquote><h4 id="_4-6-8-菱形继承" tabindex="-1"><a class="header-anchor" href="#_4-6-8-菱形继承"><span>4.6.8 菱形继承</span></a></h4><p><strong>菱形继承概念：</strong></p><p>​ 两个派生类继承同一个基类</p><p>​ 又有某个类同时继承者两个派生类</p><p>​ 这种继承被称为菱形继承，或者钻石继承</p><p><strong>典型的菱形继承案例：</strong></p><p><img src="`+r+`" alt=""></p><p><strong>菱形继承问题：</strong></p><ol><li>羊继承了动物的数据，驼同样继承了动物的数据，当草泥马使用数据时，就会产生二义性。</li><li>草泥马继承自动物的数据继承了两份，其实我们应该清楚，这份数据我们只需要一份就可以。</li></ol><p>#虚基类</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Animal</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_Age<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//继承前加virtual关键字后，变为虚继承</span></span>
<span class="line"><span class="token comment">//此时公共的父类Animal称为虚基类</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Sheep</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">virtual</span> <span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Tuo</span>   <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">virtual</span> <span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">SheepTuo</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Sheep</span><span class="token punctuation">,</span> <span class="token keyword">public</span> <span class="token class-name">Tuo</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	SheepTuo st<span class="token punctuation">;</span></span>
<span class="line">	st<span class="token punctuation">.</span>Sheep<span class="token double-colon punctuation">::</span>m_Age <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">	st<span class="token punctuation">.</span>Tuo<span class="token double-colon punctuation">::</span>m_Age <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;st.Sheep::m_Age = &quot;</span> <span class="token operator">&lt;&lt;</span> st<span class="token punctuation">.</span>Sheep<span class="token double-colon punctuation">::</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;st.Tuo::m_Age = &quot;</span> <span class="token operator">&lt;&lt;</span>  st<span class="token punctuation">.</span>Tuo<span class="token double-colon punctuation">::</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;st.m_Age = &quot;</span> <span class="token operator">&lt;&lt;</span> st<span class="token punctuation">.</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ul><li>菱形继承带来的主要问题是子类继承两份相同的数据，导致资源浪费以及毫无意义</li><li>利用虚继承可以解决菱形继承问题</li></ul><h3 id="_4-7-多态" tabindex="-1"><a class="header-anchor" href="#_4-7-多态"><span>4.7 多态</span></a></h3><h4 id="_4-7-1-多态的基本概念" tabindex="-1"><a class="header-anchor" href="#_4-7-1-多态的基本概念"><span>4.7.1 多态的基本概念</span></a></h4><p><strong>多态是C++面向对象三大特性之一</strong></p><p>多态分为两类</p><ul><li>静态多态: 函数重载 和 运算符重载属于静态多态，复用函数名</li><li>动态多态: 派生类和虚函数实现运行时多态</li></ul><p>静态多态和动态多态区别：</p><ul><li>静态多态的函数地址早绑定 - 编译阶段确定函数地址</li><li>动态多态的函数地址晚绑定 - 运行阶段确定函数地址</li></ul><p>下面通过案例进行讲解多态</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Animal</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token comment">//Speak函数就是虚函数</span></span>
<span class="line">	<span class="token comment">//函数前面加上virtual关键字，变成虚函数，那么编译器在编译的时候就不能确定函数调用了。</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;动物在说话&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;小猫在说话&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;小狗在说话&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//我们希望传入什么对象，那么就调用什么对象的函数</span></span>
<span class="line"><span class="token comment">//如果函数地址在编译阶段就能确定，那么静态联编</span></span>
<span class="line"><span class="token comment">//如果函数地址在运行阶段才能确定，就是动态联编</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">DoSpeak</span><span class="token punctuation">(</span>Animal <span class="token operator">&amp;</span> animal<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	animal<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//</span></span>
<span class="line"><span class="token comment">//多态满足条件： </span></span>
<span class="line"><span class="token comment">//1、有继承关系</span></span>
<span class="line"><span class="token comment">//2、子类重写父类中的虚函数</span></span>
<span class="line"><span class="token comment">//多态使用：</span></span>
<span class="line"><span class="token comment">//父类指针或引用指向子类对象</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	Cat cat<span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">DoSpeak</span><span class="token punctuation">(</span>cat<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	Dog dog<span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">DoSpeak</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><p>多态满足条件</p><ul><li>有继承关系</li><li>子类重写父类中的虚函数</li></ul><p>多态使用条件</p><ul><li>父类指针或引用指向子类对象</li></ul><p>重写：函数返回值类型 函数名 参数列表 完全一致称为重写</p><h4 id="_4-7-2-多态案例一-计算器类" tabindex="-1"><a class="header-anchor" href="#_4-7-2-多态案例一-计算器类"><span>4.7.2 多态案例一-计算器类</span></a></h4><p>案例描述：</p><p>分别利用普通写法和多态技术，设计实现两个操作数进行运算的计算器类</p><p>多态的优点：</p><ul><li>代码组织结构清晰</li><li>可读性强</li><li>利于前期和后期的扩展以及维护</li></ul><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//普通实现</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> <span class="token function">getResult</span><span class="token punctuation">(</span>string oper<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span>oper <span class="token operator">==</span> <span class="token string">&quot;+&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> m_Num1 <span class="token operator">+</span> m_Num2<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oper <span class="token operator">==</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> m_Num1 <span class="token operator">-</span> m_Num2<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oper <span class="token operator">==</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> m_Num1 <span class="token operator">*</span> m_Num2<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token comment">//如果要提供新的运算，需要修改源码</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> m_Num1<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> m_Num2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//普通实现测试</span></span>
<span class="line">	Calculator c<span class="token punctuation">;</span></span>
<span class="line">	c<span class="token punctuation">.</span>m_Num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	c<span class="token punctuation">.</span>m_Num2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> c<span class="token punctuation">.</span>m_Num1 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; + &quot;</span> <span class="token operator">&lt;&lt;</span> c<span class="token punctuation">.</span>m_Num2 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">&lt;&lt;</span> c<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token string">&quot;+&quot;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> c<span class="token punctuation">.</span>m_Num1 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; - &quot;</span> <span class="token operator">&lt;&lt;</span> c<span class="token punctuation">.</span>m_Num2 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">&lt;&lt;</span> c<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> c<span class="token punctuation">.</span>m_Num1 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; * &quot;</span> <span class="token operator">&lt;&lt;</span> c<span class="token punctuation">.</span>m_Num2 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">&lt;&lt;</span> c<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">//多态实现</span></span>
<span class="line"><span class="token comment">//抽象计算器类</span></span>
<span class="line"><span class="token comment">//多态优点：代码组织结构清晰，可读性强，利于前期和后期的扩展以及维护</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">AbstractCalculator</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">int</span> m_Num1<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> m_Num2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//加法计算器</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">AddCalculator</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">AbstractCalculator</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> m_Num1 <span class="token operator">+</span> m_Num2<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//减法计算器</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">SubCalculator</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">AbstractCalculator</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> m_Num1 <span class="token operator">-</span> m_Num2<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//乘法计算器</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MulCalculator</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">AbstractCalculator</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">int</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> m_Num1 <span class="token operator">*</span> m_Num2<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//创建加法计算器</span></span>
<span class="line">	AbstractCalculator <span class="token operator">*</span>abc <span class="token operator">=</span> <span class="token keyword">new</span> AddCalculator<span class="token punctuation">;</span></span>
<span class="line">	abc<span class="token operator">-&gt;</span>m_Num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	abc<span class="token operator">-&gt;</span>m_Num2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> abc<span class="token operator">-&gt;</span>m_Num1 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; + &quot;</span> <span class="token operator">&lt;&lt;</span> abc<span class="token operator">-&gt;</span>m_Num2 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">&lt;&lt;</span> abc<span class="token operator">-&gt;</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">delete</span> abc<span class="token punctuation">;</span>  <span class="token comment">//用完了记得销毁</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//创建减法计算器</span></span>
<span class="line">	abc <span class="token operator">=</span> <span class="token keyword">new</span> SubCalculator<span class="token punctuation">;</span></span>
<span class="line">	abc<span class="token operator">-&gt;</span>m_Num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	abc<span class="token operator">-&gt;</span>m_Num2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> abc<span class="token operator">-&gt;</span>m_Num1 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; - &quot;</span> <span class="token operator">&lt;&lt;</span> abc<span class="token operator">-&gt;</span>m_Num2 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">&lt;&lt;</span> abc<span class="token operator">-&gt;</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">delete</span> abc<span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line">	<span class="token comment">//创建乘法计算器</span></span>
<span class="line">	abc <span class="token operator">=</span> <span class="token keyword">new</span> MulCalculator<span class="token punctuation">;</span></span>
<span class="line">	abc<span class="token operator">-&gt;</span>m_Num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	abc<span class="token operator">-&gt;</span>m_Num2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> abc<span class="token operator">-&gt;</span>m_Num1 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; * &quot;</span> <span class="token operator">&lt;&lt;</span> abc<span class="token operator">-&gt;</span>m_Num2 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">&lt;&lt;</span> abc<span class="token operator">-&gt;</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">delete</span> abc<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//test01();</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：C++开发提倡利用多态设计程序架构，因为多态优点很多</p></blockquote><h4 id="_4-7-3-纯虚函数和抽象类" tabindex="-1"><a class="header-anchor" href="#_4-7-3-纯虚函数和抽象类"><span>4.7.3 纯虚函数和抽象类</span></a></h4><p>在多态中，通常父类中虚函数的实现是毫无意义的，主要都是调用子类重写的内容</p><p>因此可以将虚函数改为<strong>纯虚函数</strong></p><p>纯虚函数语法：<code>virtual 返回值类型 函数名 （参数列表）= 0 ;</code></p><p>当类中有了纯虚函数，这个类也称为==抽象类==</p><p><strong>抽象类特点</strong>：</p><ul><li>无法实例化对象</li><li>子类必须重写抽象类中的纯虚函数，否则也属于抽象类</li></ul><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Base</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token comment">//纯虚函数</span></span>
<span class="line">	<span class="token comment">//类中只要有一个纯虚函数就称为抽象类</span></span>
<span class="line">	<span class="token comment">//抽象类无法实例化对象</span></span>
<span class="line">	<span class="token comment">//子类必须重写父类中的纯虚函数，否则也属于抽象类</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Base</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> </span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;func调用&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	Base <span class="token operator">*</span> base <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//base = new Base; // 错误，抽象类无法实例化对象</span></span>
<span class="line">	base <span class="token operator">=</span> <span class="token keyword">new</span> Son<span class="token punctuation">;</span></span>
<span class="line">	base<span class="token operator">-&gt;</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">delete</span> base<span class="token punctuation">;</span><span class="token comment">//记得销毁</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-7-4-多态案例二-制作饮品" tabindex="-1"><a class="header-anchor" href="#_4-7-4-多态案例二-制作饮品"><span>4.7.4 多态案例二-制作饮品</span></a></h4><p><strong>案例描述：</strong></p><p>制作饮品的大致流程为：煮水 - 冲泡 - 倒入杯中 - 加入辅料</p><p>利用多态技术实现本案例，提供抽象制作饮品基类，提供子类制作咖啡和茶叶</p><p><img src="`+v+`" alt=""></p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//抽象制作饮品</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">AbstractDrinking</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token comment">//烧水</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Boil</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//冲泡</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Brew</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//倒入杯中</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">PourInCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//加入辅料</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">PutSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//规定流程</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">MakeDrink</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">Boil</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token function">Brew</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token function">PourInCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token function">PutSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//制作咖啡</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Coffee</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">AbstractDrinking</span></span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token comment">//烧水</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Boil</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;煮农夫山泉!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">//冲泡</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Brew</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;冲泡咖啡!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">//倒入杯中</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">PourInCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;将咖啡倒入杯中!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">//加入辅料</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">PutSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;加入牛奶!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//制作茶水</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Tea</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">AbstractDrinking</span></span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token comment">//烧水</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Boil</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;煮自来水!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">//冲泡</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Brew</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;冲泡茶叶!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">//倒入杯中</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">PourInCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;将茶水倒入杯中!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">//加入辅料</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">PutSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;加入枸杞!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//业务函数</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">DoWork</span><span class="token punctuation">(</span>AbstractDrinking<span class="token operator">*</span> drink<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	drink<span class="token operator">-&gt;</span><span class="token function">MakeDrink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">delete</span> drink<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">DoWork</span><span class="token punctuation">(</span><span class="token keyword">new</span> Coffee<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;--------------&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">DoWork</span><span class="token punctuation">(</span><span class="token keyword">new</span> Tea<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-7-5-虚析构和纯虚析构" tabindex="-1"><a class="header-anchor" href="#_4-7-5-虚析构和纯虚析构"><span>4.7.5 虚析构和纯虚析构</span></a></h4><p>多态使用时，如果子类中有属性开辟到堆区，那么父类指针在释放时无法调用到子类的析构代码</p><p>解决方式：将父类中的析构函数改为<strong>虚析构</strong>或者<strong>纯虚析构</strong></p><p>虚析构和纯虚析构共性：</p><ul><li>可以解决父类指针释放子类对象</li><li>都需要有具体的函数实现</li></ul><p>虚析构和纯虚析构区别：</p><ul><li>如果是纯虚析构，该类属于抽象类，无法实例化对象</li></ul><p>虚析构语法：</p><p><code>virtual ~类名(){}</code></p><p>纯虚析构语法：</p><p><code> virtual ~类名() = 0;</code></p><p><code>类名::~类名(){}</code></p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Animal 构造函数调用！&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//析构函数加上virtual关键字，变成虚析构函数</span></span>
<span class="line">	<span class="token comment">//virtual ~Animal()</span></span>
<span class="line">	<span class="token comment">//{</span></span>
<span class="line">	<span class="token comment">//	cout &lt;&lt; &quot;Animal虚析构函数调用！&quot; &lt;&lt; endl;</span></span>
<span class="line">	<span class="token comment">//}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token operator">~</span><span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Animal</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Animal 纯虚析构函数调用！&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//和包含普通纯虚函数的类一样，包含了纯虚析构函数的类也是一个抽象类。不能够被实例化。</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Cat</span><span class="token punctuation">(</span>string name<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Cat构造函数调用！&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">		m_Name <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">string</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>m_Name <span class="token operator">&lt;&lt;</span>  <span class="token string">&quot;小猫在说话!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token operator">~</span><span class="token function">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Cat析构函数调用!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Name <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">delete</span> m_Name<span class="token punctuation">;</span></span>
<span class="line">			m_Name <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	string <span class="token operator">*</span>m_Name<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	Animal <span class="token operator">*</span>animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Cat</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	animal<span class="token operator">-&gt;</span><span class="token function">Speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//通过父类指针去释放，会导致子类对象可能清理不干净，造成内存泄漏</span></span>
<span class="line">	<span class="token comment">//怎么解决？给基类增加一个虚析构函数</span></span>
<span class="line">	<span class="token comment">//虚析构函数就是用来解决通过父类指针释放子类对象</span></span>
<span class="line">	<span class="token keyword">delete</span> animal<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><p>​ 1. 虚析构或纯虚析构就是用来解决通过父类指针释放子类对象</p><p>​ 2. 如果子类中没有堆区数据，可以不写为虚析构或纯虚析构</p><p>​ 3. 拥有纯虚析构函数的类也属于抽象类</p><h4 id="_4-7-6-多态案例三-电脑组装" tabindex="-1"><a class="header-anchor" href="#_4-7-6-多态案例三-电脑组装"><span>4.7.6 多态案例三-电脑组装</span></a></h4><p><strong>案例描述：</strong></p><p>电脑主要组成部件为 CPU（用于计算），显卡（用于显示），内存条（用于存储）</p><p>将每个零件封装出抽象基类，并且提供不同的厂商生产不同的零件，例如Intel厂商和Lenovo厂商</p><p>创建电脑类提供让电脑工作的函数，并且调用每个零件工作的接口</p><p>测试时组装三台不同的电脑进行工作</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream&gt;</span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//抽象CPU类</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">CPU</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token comment">//抽象的计算函数</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//抽象显卡类</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">VideoCard</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token comment">//抽象的显示函数</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//抽象内存条类</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Memory</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token comment">//抽象的存储函数</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">storage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//电脑类</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Computer</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token function">Computer</span><span class="token punctuation">(</span>CPU <span class="token operator">*</span> cpu<span class="token punctuation">,</span> VideoCard <span class="token operator">*</span> vc<span class="token punctuation">,</span> Memory <span class="token operator">*</span> mem<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		m_cpu <span class="token operator">=</span> cpu<span class="token punctuation">;</span></span>
<span class="line">		m_vc <span class="token operator">=</span> vc<span class="token punctuation">;</span></span>
<span class="line">		m_mem <span class="token operator">=</span> mem<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//提供工作的函数</span></span>
<span class="line">	<span class="token keyword">void</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">//让零件工作起来，调用接口</span></span>
<span class="line">		m_cpu<span class="token operator">-&gt;</span><span class="token function">calculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">		m_vc<span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">		m_mem<span class="token operator">-&gt;</span><span class="token function">storage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//提供析构函数 释放3个电脑零件</span></span>
<span class="line">	<span class="token operator">~</span><span class="token function">Computer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">//释放CPU零件</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span>m_cpu <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">delete</span> m_cpu<span class="token punctuation">;</span></span>
<span class="line">			m_cpu <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">//释放显卡零件</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span>m_vc <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">delete</span> m_vc<span class="token punctuation">;</span></span>
<span class="line">			m_vc <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">//释放内存条零件</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span>m_mem <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">delete</span> m_mem<span class="token punctuation">;</span></span>
<span class="line">			m_mem <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	CPU <span class="token operator">*</span> m_cpu<span class="token punctuation">;</span> <span class="token comment">//CPU的零件指针</span></span>
<span class="line">	VideoCard <span class="token operator">*</span> m_vc<span class="token punctuation">;</span> <span class="token comment">//显卡零件指针</span></span>
<span class="line">	Memory <span class="token operator">*</span> m_mem<span class="token punctuation">;</span> <span class="token comment">//内存条零件指针</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//具体厂商</span></span>
<span class="line"><span class="token comment">//Intel厂商</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">IntelCPU</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">CPU</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Intel的CPU开始计算了！&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">IntelVideoCard</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">VideoCard</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Intel的显卡开始显示了！&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">IntelMemory</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Memory</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">storage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Intel的内存条开始存储了！&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//Lenovo厂商</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">LenovoCPU</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">CPU</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Lenovo的CPU开始计算了！&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">LenovoVideoCard</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">VideoCard</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Lenovo的显卡开始显示了！&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">LenovoMemory</span> <span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Memory</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">storage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Lenovo的内存条开始存储了！&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//第一台电脑零件</span></span>
<span class="line">	CPU <span class="token operator">*</span> intelCpu <span class="token operator">=</span> <span class="token keyword">new</span> IntelCPU<span class="token punctuation">;</span></span>
<span class="line">	VideoCard <span class="token operator">*</span> intelCard <span class="token operator">=</span> <span class="token keyword">new</span> IntelVideoCard<span class="token punctuation">;</span></span>
<span class="line">	Memory <span class="token operator">*</span> intelMem <span class="token operator">=</span> <span class="token keyword">new</span> IntelMemory<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;第一台电脑开始工作：&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//创建第一台电脑</span></span>
<span class="line">	Computer <span class="token operator">*</span> computer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Computer</span><span class="token punctuation">(</span>intelCpu<span class="token punctuation">,</span> intelCard<span class="token punctuation">,</span> intelMem<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	computer1<span class="token operator">-&gt;</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">delete</span> computer1<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;-----------------------&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;第二台电脑开始工作：&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//第二台电脑组装</span></span>
<span class="line">	Computer <span class="token operator">*</span> computer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Computer</span><span class="token punctuation">(</span><span class="token keyword">new</span> LenovoCPU<span class="token punctuation">,</span> <span class="token keyword">new</span> LenovoVideoCard<span class="token punctuation">,</span> <span class="token keyword">new</span> LenovoMemory<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">	computer2<span class="token operator">-&gt;</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">delete</span> computer2<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;-----------------------&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;第三台电脑开始工作：&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//第三台电脑组装</span></span>
<span class="line">	Computer <span class="token operator">*</span> computer3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Computer</span><span class="token punctuation">(</span><span class="token keyword">new</span> LenovoCPU<span class="token punctuation">,</span> <span class="token keyword">new</span> IntelVideoCard<span class="token punctuation">,</span> <span class="token keyword">new</span> LenovoMemory<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">	computer3<span class="token operator">-&gt;</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">delete</span> computer3<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-文件操作" tabindex="-1"><a class="header-anchor" href="#_5-文件操作"><span>5 文件操作</span></a></h2><p>程序运行时产生的数据都属于临时数据，程序一旦运行结束都会被释放</p><p>通过<strong>文件可以将数据持久化</strong></p><p>C++中对文件操作需要包含头文件 ==&lt; fstream &gt;==</p><p>文件类型分为两种：</p><ol><li><strong>文本文件</strong> - 文件以文本的<strong>ASCII码</strong>形式存储在计算机中</li><li><strong>二进制文件</strong> - 文件以文本的<strong>二进制</strong>形式存储在计算机中，用户一般不能直接读懂它们</li></ol><p>操作文件的三大类:</p><ol><li>ofstream：写操作</li><li>ifstream： 读操作</li><li>fstream ： 读写操作</li></ol><h3 id="_5-1文本文件" tabindex="-1"><a class="header-anchor" href="#_5-1文本文件"><span>5.1文本文件</span></a></h3><h4 id="_5-1-1写文件" tabindex="-1"><a class="header-anchor" href="#_5-1-1写文件"><span>5.1.1写文件</span></a></h4><p>写文件步骤如下：</p><ol><li>包含头文件</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">#include &lt;fstream&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>创建流对象</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ofstream ofs;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>打开文件</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ofs.open(&quot;文件路径&quot;,打开方式);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>写数据</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ofs &lt;&lt; &quot;写入的数据&quot;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="6"><li>关闭文件</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ofs.close();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>文件打开方式：</p><table><thead><tr><th>打开方式</th><th>解释</th></tr></thead><tbody><tr><td>ios::in</td><td>为读文件而打开文件</td></tr><tr><td>ios::out</td><td>为写文件而打开文件</td></tr><tr><td>ios::ate</td><td>初始位置：文件尾</td></tr><tr><td>ios::app</td><td>追加方式写文件</td></tr><tr><td>ios::trunc</td><td>如果文件存在先删除，再创建</td></tr><tr><td>ios::binary</td><td>二进制方式</td></tr></tbody></table><p><strong>注意：</strong> 文件打开方式可以配合使用，利用|操作符</p><p>**例如：**用二进制方式写文件 <code>ios::binary | ios:: out</code></p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fstream&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	ofstream ofs<span class="token punctuation">;</span></span>
<span class="line">	ofs<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> ios<span class="token double-colon punctuation">::</span>out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	ofs <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;姓名：张三&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	ofs <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;性别：男&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	ofs <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;年龄：18&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	ofs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ul><li>文件操作必须包含头文件 fstream</li><li>读文件可以利用 ofstream ，或者fstream类</li><li>打开文件时候需要指定操作文件的路径，以及打开方式</li><li>利用&lt;&lt;可以向文件中写数据</li><li>操作完毕，要关闭文件</li></ul><h4 id="_5-1-2读文件" tabindex="-1"><a class="header-anchor" href="#_5-1-2读文件"><span>5.1.2读文件</span></a></h4><p>读文件与写文件步骤相似，但是读取方式相对于比较多</p><p>读文件步骤如下：</p><ol><li>包含头文件</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">#include &lt;fstream&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>创建流对象</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ifstream ifs;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>打开文件并判断文件是否打开成功</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ifs.open(&quot;文件路径&quot;,打开方式);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>读数据</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">四种方式读取</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>关闭文件</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ifs.close();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fstream&gt;</span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	ifstream ifs<span class="token punctuation">;</span></span>
<span class="line">	ifs<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> ios<span class="token double-colon punctuation">::</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ifs<span class="token punctuation">.</span><span class="token function">is_open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;文件打开失败&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//第一种方式</span></span>
<span class="line">	<span class="token comment">//char buf[1024] = { 0 };</span></span>
<span class="line">	<span class="token comment">//while (ifs &gt;&gt; buf)</span></span>
<span class="line">	<span class="token comment">//{</span></span>
<span class="line">	<span class="token comment">//	cout &lt;&lt; buf &lt;&lt; endl;</span></span>
<span class="line">	<span class="token comment">//}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//第二种</span></span>
<span class="line">	<span class="token comment">//char buf[1024] = { 0 };</span></span>
<span class="line">	<span class="token comment">//while (ifs.getline(buf,sizeof(buf)))</span></span>
<span class="line">	<span class="token comment">//{</span></span>
<span class="line">	<span class="token comment">//	cout &lt;&lt; buf &lt;&lt; endl;</span></span>
<span class="line">	<span class="token comment">//}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//第三种</span></span>
<span class="line">	<span class="token comment">//string buf;</span></span>
<span class="line">	<span class="token comment">//while (getline(ifs, buf))</span></span>
<span class="line">	<span class="token comment">//{</span></span>
<span class="line">	<span class="token comment">//	cout &lt;&lt; buf &lt;&lt; endl;</span></span>
<span class="line">	<span class="token comment">//}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">char</span> c<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>c <span class="token operator">=</span> ifs<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token constant">EOF</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> c<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	ifs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ul><li>读文件可以利用 ifstream ，或者fstream类</li><li>利用is_open函数可以判断文件是否打开成功</li><li>close 关闭文件</li></ul><h3 id="_5-2-二进制文件" tabindex="-1"><a class="header-anchor" href="#_5-2-二进制文件"><span>5.2 二进制文件</span></a></h3><p>以二进制的方式对文件进行读写操作</p><p>打开方式要指定为 ==ios::binary==</p><h4 id="_5-2-1-写文件" tabindex="-1"><a class="header-anchor" href="#_5-2-1-写文件"><span>5.2.1 写文件</span></a></h4><p>二进制方式写文件主要利用流对象调用成员函数write</p><p>函数原型 ：<code>ostream&amp; write(const char * buffer,int len);</code></p><p>参数解释：字符指针buffer指向内存中一段存储空间。len是读写的字节数</p><p><strong>示例：</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fstream&gt;</span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">char</span> m_Name<span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> m_Age<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//二进制文件  写文件</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//1、包含头文件</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//2、创建输出流对象</span></span>
<span class="line">	ofstream <span class="token function">ofs</span><span class="token punctuation">(</span><span class="token string">&quot;person.txt&quot;</span><span class="token punctuation">,</span> ios<span class="token double-colon punctuation">::</span>out <span class="token operator">|</span> ios<span class="token double-colon punctuation">::</span>binary<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	</span>
<span class="line">	<span class="token comment">//3、打开文件</span></span>
<span class="line">	<span class="token comment">//ofs.open(&quot;person.txt&quot;, ios::out | ios::binary);</span></span>
<span class="line"></span>
<span class="line">	Person p <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;张三&quot;</span>  <span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//4、写文件</span></span>
<span class="line">	ofs<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>p<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//5、关闭文件</span></span>
<span class="line">	ofs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ul><li>文件输出流对象 可以通过write函数，以二进制方式写数据</li></ul><h4 id="_5-2-2-读文件" tabindex="-1"><a class="header-anchor" href="#_5-2-2-读文件"><span>5.2.2 读文件</span></a></h4><p>二进制方式读文件主要利用流对象调用成员函数read</p><p>函数原型：<code>istream&amp; read(char *buffer,int len);</code></p><p>参数解释：字符指针buffer指向内存中一段存储空间。len是读写的字节数</p><p>示例：</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fstream&gt;</span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">	<span class="token keyword">char</span> m_Name<span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> m_Age<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	ifstream <span class="token function">ifs</span><span class="token punctuation">(</span><span class="token string">&quot;person.txt&quot;</span><span class="token punctuation">,</span> ios<span class="token double-colon punctuation">::</span>in <span class="token operator">|</span> ios<span class="token double-colon punctuation">::</span>binary<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ifs<span class="token punctuation">.</span><span class="token function">is_open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;文件打开失败&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	Person p<span class="token punctuation">;</span></span>
<span class="line">	ifs<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>p<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;姓名： &quot;</span> <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">.</span>m_Name <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; 年龄： &quot;</span> <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">.</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>文件输入流对象 可以通过read函数，以二进制方式读数据</li></ul>`,497)]))}const y=s(k,[["render",m]]),w=JSON.parse('{"path":"/guide/knowledge/C__%E6%A0%B8%E5%BF%83%E7%BC%96%E7%A8%8B.html","title":"C++核心编程","lang":"zh-CN","frontmatter":{},"git":{},"filePathRelative":"guide/knowledge/C++核心编程.md"}');export{y as comp,w as data};
