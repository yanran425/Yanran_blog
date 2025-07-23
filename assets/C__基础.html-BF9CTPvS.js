import{_ as t,c,d as s,b as l,a as e,w as p,r as o,o as u,e as i}from"./app-irwo0WJz.js";const d="/Yanran_blog/assets/C__%E5%9F%BA%E7%A1%80-CzumH0co.png",r="/Yanran_blog/assets/C__%E5%9F%BA%E7%A1%80-1-CW6dZvLE.png",v={};function k(m,n){const a=o("RouteLink");return u(),c("div",null,[n[2]||(n[2]=s('<h1 id="c-基础" tabindex="-1"><a class="header-anchor" href="#c-基础"><span>C++基础</span></a></h1><h2 id="_1-技术路线" tabindex="-1"><a class="header-anchor" href="#_1-技术路线"><span>1. 技术路线</span></a></h2><p><img src="'+d+`" alt="600"></p><h2 id="_2-链接" tabindex="-1"><a class="header-anchor" href="#_2-链接"><span>2. 链接</span></a></h2><p>https://www.zhihu.com/question/587090539 ^a28e96</p><p>https://www.zhihu.com/tardis/zm/art/435927070?source_id=1005</p><p>https://interviewguide.cn/notes/03-hunting_job/02-interview/01-01-01-basic.html</p><h2 id="_3-指针常量与常量指针" tabindex="-1"><a class="header-anchor" href="#_3-指针常量与常量指针"><span>3 指针常量与常量指针</span></a></h2><ul><li>const修饰指针有三种情况</li></ul><ol><li>const修饰指针 --- 常量指针</li><li>const修饰常量 --- 指针常量</li><li>const即修饰指针，又修饰常量</li></ol><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">int main() {</span>
<span class="line">	int a = 10;</span>
<span class="line">	int b = 10;</span>
<span class="line">	//const修饰的是指针，指针指向可以改，指针指向的值不可以更改</span>
<span class="line">	const int * p1 = &amp;a; </span>
<span class="line">	p1 = &amp;b; //正确</span>
<span class="line">	//*p1 = 100;  报错</span>
<span class="line">	//const修饰的是常量，指针指向不可以改，指针指向的值可以更改</span>
<span class="line">	int * const p2 = &amp;a;</span>
<span class="line">	//p2 = &amp;b; //错误</span>
<span class="line">	*p2 = 100; //正确</span>
<span class="line">    //const既修饰指针又修饰常量</span>
<span class="line">	const int * const p3 = &amp;a;</span>
<span class="line">	//p3 = &amp;b; //错误</span>
<span class="line">	//*p3 = 100; //错误</span>
<span class="line">	system(&quot;pause&quot;);</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>引用的本质是在内部实现一个指针常量.</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">int a = 10;</span>
<span class="line">//自动转换为 int* const ref = &amp;a; 指针常量是指针指向不可改，也说明为什么引用不可更改</span>
<span class="line">int&amp; ref = a; </span>
<span class="line">ref = 20; //内部发现ref是引用，自动转换为: *ref = 20;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在函数形参列表中，可以加==const修饰形参==，防止形参改变实参</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">//int&amp; ref = 10;  引用本身需要一个合法的内存空间，因此这行错误</span>
<span class="line">//加入const就可以了，编译器优化代码，int temp = 10; const int&amp; ref = temp;</span>
<span class="line">const int&amp; ref = 10;</span>
<span class="line"></span>
<span class="line">//常用作类的拷贝构造函数</span>
<span class="line">Person(const Person&amp; p) {</span>
<span class="line">	cout &lt;&lt; &quot;拷贝构造函数!&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-指针数组与数组指针" tabindex="-1"><a class="header-anchor" href="#_4-指针数组与数组指针"><span>4 指针数组与数组指针</span></a></h2><ul><li>指针</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">int a = 10;</span>
<span class="line">//变量名是p</span>
<span class="line">int* p = &amp;a;//p是一个变量名，其值是int*类型</span>
<span class="line"></span>
<span class="line">int array[5] = {1, 2, 3, 4, 5}; // 定义数组</span>
<span class="line">int *intptr = array; // 定义指向数组元素的指针</span>
<span class="line">cout &lt;&lt; intptr &lt;&lt; endl &lt;&lt; intptr[2] &lt;&lt; endl&lt;&lt; *intptr &lt;&lt;endl&lt;&lt; *(intptr+1)&lt;&lt; endl;</span>
<span class="line">int (*arrayptr)[5] = &amp;array; // 定义指向数组的指针</span>
<span class="line">cout &lt;&lt; arrayptr &lt;&lt; endl &lt;&lt; *arrayptr &lt;&lt; endl&lt;&lt; **arrayptr &lt;&lt; *(*arrayptr+1 )&lt;&lt; endl;</span>
<span class="line">//输出</span>
<span class="line">012FFC20</span>
<span class="line">3</span>
<span class="line">1</span>
<span class="line">2</span>
<span class="line">012FFC20</span>
<span class="line">012FFC20</span>
<span class="line">12</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>指针数组：是一个数组，其每个元素是指针</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">//变量名是p[3]</span>
<span class="line">int* p[3]; //定义一个指针数组,该数组长度为3，其内存放着三个指针变量分别是p[0]、p[1]、p[2]</span>
<span class="line">int a[3][4];</span>
<span class="line">for (int i = 0; i &lt; 3; i++)</span>
<span class="line">	p[i] = a[i]//要分别赋值。</span>
<span class="line"></span>
<span class="line">int a = 10;</span>
<span class="line">cout &lt;&lt; &amp;a &lt;&lt; endl;</span>
<span class="line">//变量名是p[3][4]</span>
<span class="line">int* p[3][4] = { &amp;a };//直接定义二维数组，其每个元素存放a的地址</span>
<span class="line">cout &lt;&lt; p[0][0] &lt;&lt; endl;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数组指针：是一个指针，其指向一个数组</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">int a[3][4] = { {1,2,3,4},{5,6,7,8},{9,10,11,12} };</span>
<span class="line">//变量名是*p</span>
<span class="line">int (*p)[4]; //定义一个数组指针</span>
<span class="line">p=a; //将二维数组赋给一个指针，本质上将二维数组的首地址赋给p，即a[0]或&amp;a[0][0]</span>
<span class="line">p++; //该语句执行过后，也就是p=p+1;p跨过行a[0][]指向了行a[1][]</span>
<span class="line"></span>
<span class="line">int(* pa)[3][4] = &amp;a;</span>
<span class="line">//变量名是*pa</span>
<span class="line">cout &lt;&lt; *(*(*pa)+1)+1)&lt;&lt;endl;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-指针函数与函数指针" tabindex="-1"><a class="header-anchor" href="#_5-指针函数与函数指针"><span>5 指针函数与函数指针</span></a></h2><ul><li>指针函数：是一个函数，返回值是指针</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">int  *fun(int x)</span>
<span class="line">Data* f(int a,int b){</span>
<span class="line">    Data * data = new Data;</span>
<span class="line">    data-&gt;a = a;</span>
<span class="line">    data-&gt;b = b;</span>
<span class="line">    return data;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数指针：是一个指针，指向函数的入口</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">int test(int a){</span>
<span class="line">    return a;</span>
<span class="line">}</span>
<span class="line">int main(int argc, const char * argv[]){</span>
<span class="line">    int (*fp)(int a);</span>
<span class="line">    fp = test;</span>
<span class="line">    //或者</span>
<span class="line">    int (*fp)(int a) = &amp;test;</span>
<span class="line">    cout&lt;&lt;fp(2)&lt;&lt;endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-lambda表达式" tabindex="-1"><a class="header-anchor" href="#_6-lambda表达式"><span>6 Lambda表达式</span></a></h2><ul><li>Lambda表达式是一种在<strong>被调用的位置</strong>或<strong>作为参数传递给函数的位置</strong>定义<strong>匿名函数对象（闭包）</strong> 的简便方法。</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">[capture list] (parameter list) mutable -&gt; return type { function body }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>[capture list] 是捕获列表，用于指定 Lambda表达式可以访问的外部变量，以及是按值还是按引用的方式访问。它标识一个Lambda的开始。函数对象参数是传递给编译器自动生成的函数对象类的构造函数的。函数对象参数只能使用那些到定义Lambda为止时Lambda所在作用范围内可见的局部变量（包括Lambda所在类的this）。 <ol><li>空：没有使用任何函数对象参数。</li><li>=：使用Lambda所在作用范围内所有可见的局部变量（包括Lambda所在类的this），并且是<strong>值传递方式</strong>（相当于编译器自动为我们按值传递了所有局部变量）。</li><li>&amp;：使用Lambda所在作用范围内所有可见的局部变量（包括Lambda所在类的this），并且是<strong>引用传递方式</strong>（相当于编译器自动为我们按引用传递了所有局部变量）。</li><li>this：函数体内可以使用Lambda所在类中的成员变量。此时是<strong>引用传递类的成员变量</strong>。</li><li>a：将a按值进行传递。按值进行传递时，函数体内不能修改传递进来的a的拷贝，因为默认情况下函数是const的。<strong>要修改传递进来的a的拷贝</strong>，可以添加mutable修饰符。</li><li>&amp;a：将a按引用进行传递。</li><li>a, &amp;b：将a按值进行传递，b按引用进行传递。</li><li>=，&amp;a, &amp;b。除a和b按引用进行传递外，其他参数都按值进行传递。</li><li>&amp;, a, b：除a和b按值进行传递外，其他参数都按引用进行传递。</li></ol></li></ul><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">auto</span> f <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 值捕获 x</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// 修改外部的 x</span></span>
<span class="line">cout <span class="token operator">&lt;&lt;</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// 输出 15，不受外部 x 的影响</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">auto</span> f <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">&amp;</span>x<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 引用捕获 x</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// 修改外部的 x</span></span>
<span class="line">cout <span class="token operator">&lt;&lt;</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// 输出 25，受外部 x 的影响</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">auto</span> f <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>y<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">int</span> z<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 隐式按值捕获 x，显式按引用捕获 y</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span> <span class="token comment">// 修改外部的 x</span></span>
<span class="line">y <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span> <span class="token comment">// 修改外部的 y</span></span>
<span class="line">cout <span class="token operator">&lt;&lt;</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// 输出 55，不受外部 x 的影响，受外部 y 的影响</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">auto</span> f <span class="token operator">=</span> <span class="token punctuation">[</span>z <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> z <span class="token operator">+</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 初始化捕获 z，相当于值捕获 x + 5</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// 修改外部的 x</span></span>
<span class="line">cout <span class="token operator">&lt;&lt;</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// 输出 20，不受外部 x 的影响</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>parameter list 是参数列表，用于表示 Lambda表达式的参数，没有参数时，可以为空。也可以省略。有参数时和普通函数一样指定参数的类型和名称，例如通过按值（如：(a,b)）和按引用（如：(&amp;a,&amp;b)）两种方式进行传递，还可以在 c++14 中使用 auto 关键字来实现泛型参数。</li><li>mutable是可修改标示符，按值传递函数对象参数时，加上mutable修饰符后，可以修改按值传递进来的拷贝（注意是能修改拷贝，而不是值本身）。不使用时可以省略。</li><li>return type 是返回值类型，用于指定 Lambda表达式的返回值类型，可以省略，表示由编译器根据函数体推导，也可以使用 -&gt; 符号显式指定，还可以在 c++14 中使用 auto 关键字来实现泛型返回值。</li><li>function body 是函数体，用于表示 Lambda表达式的具体逻辑，可以是一条语句，也可以是多条语句，还可以在 c++14 中使用 constexpr 来实现编译期计算。</li></ul><blockquote><p>[!NOTE] 虽然=捕获列表是值传递，但是可以以值的形式传地址，在Lambda函数内部不修改该地址而修改该地址存放的数据以实现修改值</p></blockquote><h2 id="_7-字符大小写转换" tabindex="-1"><a class="header-anchor" href="#_7-字符大小写转换"><span>7 字符大小写转换</span></a></h2><ul><li>字母大写转换</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">#include &lt;cctype&gt; // 包含 toupper 和 tolower 函数</span>
<span class="line">std::string str = &quot;Hello World!&quot;;</span>
<span class="line">// 转换为大写</span>
<span class="line">for (char &amp;c : str) {</span>
<span class="line">	c = std::toupper(c);</span>
<span class="line">}</span>
<span class="line">std::cout &lt;&lt; str &lt;&lt; std::endl; // 输出: HELLO WORLD!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字母小写转换</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">// 转换为小写</span>
<span class="line">for (char &amp;c : str) {</span>
<span class="line">	c = std::tolower(c);</span>
<span class="line">}</span>
<span class="line">std::cout &lt;&lt; str &lt;&lt; std::endl; // 输出: hello world!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字符自动识别转换</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">#include &lt;cctype&gt;</span>
<span class="line">if (isupper(ch)) { // 如果输入的是大写字母  </span>
<span class="line">        ch = tolower(ch); // 转换为小写字母并输出  </span>
<span class="line">        cout &lt;&lt; &quot;转换后的字母为：&quot; &lt;&lt; ch &lt;&lt; endl;  </span>
<span class="line">} else if (islower(ch)) { // 如果输入的是小写字母  </span>
<span class="line">	ch = toupper(ch); // 转换为大写字母并输出  </span>
<span class="line">	cout &lt;&lt; &quot;转换后的字母为：&quot; &lt;&lt; ch &lt;&lt; endl;  </span>
<span class="line">} else {  </span>
<span class="line">	cout &lt;&lt; &quot;输入的不是英文字母。&quot; &lt;&lt; endl;  </span>
<span class="line">}  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字符串大小写转换</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">#include &lt;algorithm&gt;</span>
<span class="line">cin&gt;&gt;str;</span>
<span class="line">///转小写</span>
<span class="line">transform(str.begin(),str.end(),str.begin(),::tolower);</span>
<span class="line">cout&lt;&lt;&quot;转化为小写后为：&quot;&lt;&lt;str&lt;&lt;endl;</span>
<span class="line">transform(str.begin(),str.end(),str.begin(),::toupper);</span>
<span class="line">cout&lt;&lt;&quot;转化为大写后为：&quot;&lt;&lt;str&lt;&lt;endl;</span>
<span class="line">return 0;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-字符-数字转换" tabindex="-1"><a class="header-anchor" href="#_8-字符-数字转换"><span>8 字符-数字转换</span></a></h2><ul><li>数字转字符</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">int num = 1; // 数字1</span>
<span class="line">char ch = num + &#39;0&#39;; // 转换为字符&#39;1&#39;</span>
<span class="line">cout &lt;&lt; &quot;转换后的字符是: &quot; &lt;&lt; ch &lt;&lt; endl; // 输出: 转换后的字符是: 1</span>
<span class="line"></span>
<span class="line">//以下方法只能用于整形/长整型转字符数组</span>
<span class="line">int g = 45612;</span>
<span class="line">char j[20];</span>
<span class="line">itoa(g, j, 0);</span>
<span class="line">ltoa(g, j, 0);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字符转数字</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">char ch = &#39;9&#39;;</span>
<span class="line">int n = ch - &#39;0&#39;;</span>
<span class="line"></span>
<span class="line">//以下方法只能用于字符数组转int/float/long</span>
<span class="line">char cstr[] = &quot;1234.6&quot;;</span>
<span class="line">int d = atoi(cstr);</span>
<span class="line">float d = atof(cstr);</span>
<span class="line">long d = atol(cstr);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数字转字符串</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">string to_string(int val);</span>
<span class="line">string to_string(long val);</span>
<span class="line">string to_string(long long val);</span>
<span class="line">string to_string(unsigned int val);</span>
<span class="line">string to_string(unsigned long val);</span>
<span class="line">string to_string(unsigned long long val);</span>
<span class="line">string to_string(float val);</span>
<span class="line">string to_string(double val);</span>
<span class="line">string to_string(long double val);</span>
<span class="line"></span>
<span class="line">string si = to_string(42); // si=&quot;42&quot;</span>
<span class="line">string sl = to_string(42L); // sl=&quot;42&quot;</span>
<span class="line">string su = to_string(42u); // su=&quot;42&quot;</span>
<span class="line">string sd = to_wstring(42.0); // sd=&quot;42.000000&quot;</span>
<span class="line">string sld = to_wstring(42.0L); // sld=&quot;42.000000&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字符串转数字</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">int stoi(const string&amp; str, size_t* idx = 0; int base = 10);</span>
<span class="line">long stol(const string&amp; str, size_t* idx = 0, int base = 10);</span>
<span class="line">long long stoll(const string&amp; str, size_t* idx = 0, int base = 10);</span>
<span class="line"></span>
<span class="line">auto i1 = std::stoi(&quot;42&quot;);</span>
<span class="line">auto i2 = std::stoi(&quot;101010&quot;, nullptr, 2); // i2 = 42</span>
<span class="line">auto i3 = std::stoi(&quot;052&quot;, nullptr, 8); // i3 = 42</span>
<span class="line">auto i4 = std::stoi(&quot;0x2A&quot;, nullptr, 16); // i4 = 42</span>
<span class="line">auto f1 = std::stof(&quot;123.45&quot;);</span>
<span class="line">auto d2 = std::stod(&quot;1.2345e+2&quot;);</span>
<span class="line">auto ll3 = std::stod(&quot;-123456789&quot;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>toascii（将整型数转换成合法的ASCII 码字符）</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line"></span>
<span class="line">#include&lt;ctype.h&gt;</span>
<span class="line"></span>
<span class="line">int toascii(int c);</span>
<span class="line"></span>
<span class="line">toascii()会将参数c转换成7位的unsigned char值，第八位则会被清除，此字符即会被转成ASCII码字符。返回值将转换成功的ASCI</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-string与const-char" tabindex="-1"><a class="header-anchor" href="#_9-string与const-char"><span>9 string与const char*</span></a></h2><blockquote><p>[!NOTE] &lt;string&gt;是C++标准库头文件，包含了拟容器class std::string的声明（不过class string事实上只是basic_string&lt;char&gt;的typedef），用于字符串操作。</p></blockquote><ul><li>const char* 转换成string</li></ul><p>在C++中存在着从const char*到string的隐式类型转换，换句话说，如果一个函数的参数类型是string类，直接传入const char*类型的参数是没问题的</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">const char* cstr = &quot;demo&quot;;</span>
<span class="line">string str(cstr);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>string与const char*的转换</li></ul><p>在传入参数时，有时我们传入string在编译时是会报错的，所以我们就需要传入const char*类型</p><p>我们可以使用成员函数c_str()，来返回string对应的char数组</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">string str = &quot;demo&quot;;</span>
<span class="line">const char* cstr = str.c_str();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>并且，在进行文件读写的时候，使用const char* 比使用string更安全。因为，string是会自动分配内存的，其内部的存储方式是不可见的，而const char*类型是整存整取的，或者也可以自己手动存入每一部分</p><h2 id="_10-cstring与const-char" tabindex="-1"><a class="header-anchor" href="#_10-cstring与const-char"><span>10 CString与const char*</span></a></h2><blockquote><p>[!NOTE] &lt;cstring&gt;是C标准库头文件&lt;string.h&gt;的C++标准库版本，包含了C风格字符串（NUL即&#39;\\0&#39;结尾字符串）相关的一些类型和函数的声明，例如strcmp、strchr、strstr等。</p></blockquote>`,66)),l("p",null,[e(a,{to:"/guide/knowledge/c++/mfc.html#_2.1%20%E5%A4%9A%E5%AD%97%E8%8A%82%E4%B8%8E%E5%AE%BD%E5%AD%97%E8%8A%82"},{default:p(()=>n[0]||(n[0]=[i("2.1 多字节与宽字节")])),_:1,__:[0]})]),n[3]||(n[3]=s(`<h2 id="_11-字符串读取" tabindex="-1"><a class="header-anchor" href="#_11-字符串读取"><span>11 字符串读取</span></a></h2><ul><li>cin&gt;&gt;</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line"></span>
<span class="line">用法1：最基本，也是最常用的用法，输入一个数字：</span>
<span class="line"></span>
<span class="line">#include &lt;iostream&gt;  </span>
<span class="line">using namespace std;  </span>
<span class="line">int main ()  </span>
<span class="line">{  </span>
<span class="line">	int a,b;  </span>
<span class="line">	cin&gt;&gt;a&gt;&gt;b;  </span>
<span class="line">	cout&lt;&lt;a+b&lt;&lt;endl;  </span>
<span class="line">}</span>
<span class="line">输入：2[回车]3[回车]  </span>
<span class="line">输出：5</span>
<span class="line">注意:&gt;&gt; 是会过滤掉不可见字符（如 空格 回车，TAB 等）</span>
<span class="line"></span>
<span class="line">用法2：接受一个字符串，遇“空格”、“TAB”、“回车”都结束</span>
<span class="line">int main ()  </span>
<span class="line">{  </span>
<span class="line">	char a[20];  </span>
<span class="line">	cin&gt;&gt;a;  </span>
<span class="line">	cout&lt;&lt;a&lt;&lt;endl;  </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">输入：jkljkljkl</span>
<span class="line">输出：jkljkljkl</span>
<span class="line"></span>
<span class="line">输入：jkljkl jkljkl       //遇空格结束  </span>
<span class="line">输出：jkljkl</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>cin.get()</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">用法1： cin.get(字符变量名)可以用来接收字符</span>
<span class="line">int main ()  </span>
<span class="line">{  </span>
<span class="line">	char ch;  </span>
<span class="line">	ch=cin.get();               //或者cin.get(ch);  </span>
<span class="line">	cout&lt;&lt;ch&lt;&lt;endl;  </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">输入：jljkljkl  </span>
<span class="line">输出：j</span>
<span class="line"></span>
<span class="line">用法2：cin.get(字符数组名,接收字符数目)用来接收一行字符串,可以接收空格</span>
<span class="line">int main ()  </span>
<span class="line">{  </span>
<span class="line">	char a[20];  </span>
<span class="line">	cin.get(a,20);  </span>
<span class="line">	cout&lt;&lt;a&lt;&lt;endl;  </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">输入：jkl jkl jkl  </span>
<span class="line">输出：jkl jkl jkl</span>
<span class="line"></span>
<span class="line">输入：abcdeabcdeabcdeabcdeabcde （输入25个字符）  </span>
<span class="line">输出：abcdeabcdeabcdeabcd              （接收19个字符+1个&#39;\\0&#39;）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>cin.getline()  // 接受一个字符串，可以接收空格并输出</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line"></span>
<span class="line">int main ()  </span>
<span class="line">{  </span>
<span class="line">	char m[7];  </span>
<span class="line">	cin.getline(m,5);  </span>
<span class="line">	cout&lt;&lt;m&lt;&lt;endl;  </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">输入：jkljkljkl  </span>
<span class="line">输出：jklj</span>
<span class="line">接受5个字符到m中，其中最后一个为&#39;\\0&#39;，所以只看到4个字符输出；</span>
<span class="line"></span>
<span class="line">如果把5改成7：  </span>
<span class="line">输入：jk jkajk  </span>
<span class="line">输出：jk jkajk</span>
<span class="line"></span>
<span class="line">//延伸：  </span>
<span class="line">//cin.getline()实际上有三个参数，cin.getline(接受字符串的变量,接受个数,结束字符)  </span>
<span class="line">//当第三个参数省略时，系统默认为&#39;\\0&#39;  </span>
<span class="line">//如果将例子中cin.getline()改为cin.getline(m,5,&#39;a&#39;);当输入jk jkajk时输出jk jk</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>getline()     // 接受一个字符串，可以接收空格并输出</li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line"></span>
<span class="line">#include&lt;string&gt;  </span>
<span class="line">int main ()  </span>
<span class="line">{  </span>
<span class="line">	string str;  </span>
<span class="line">	getline(cin,str);  </span>
<span class="line">	cout&lt;&lt;str&lt;&lt;endl;  </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">输入：jkljkljkl  </span>
<span class="line">输出：jkljkljkl</span>
<span class="line"></span>
<span class="line">输入：jkl jfksldfj jklsjfl  </span>
<span class="line">输出：jkl jfksldfj jklsjfl</span>
<span class="line"></span>
<span class="line">和cin.getline()类似，但是cin.getline()属于istream流，而getline()属于string流，是不一样的两个函数</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-explicit" tabindex="-1"><a class="header-anchor" href="#_12-explicit"><span>12 explicit</span></a></h2><ul><li><p>explicit关键字用于修饰类的构造函数，特别是那些只有一个参数的构造函数。它的目的是要求在对象初始化或赋值时必须显式地使用构造函数，从而避免了编译器自动进行类型转换所可能引发的错误和歧义。</p></li><li><p>例如，如果一个类有一个接受单个整数参数的构造函数，没有<em>explicit</em>关键字修饰，那么编译器允许使用单个整数值来隐式创建该类的对象。这可能导致代码的可读性降低，因为从代码表面上看不出实际发生了类型转换。</p></li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">class MyClass {</span>
<span class="line">	public:</span>
<span class="line">		MyClass(int value) : _value(value) {}</span>
<span class="line">	private:</span>
<span class="line">		int _value;</span>
<span class="line">};</span>
<span class="line">MyClass obj = 10; // 隐式转换，没有使用explicit关键字</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>在上述代码中，_MyClass obj = 10;_这行代码会隐式地调用_MyClass_的构造函数，将整数_10_转换为_MyClass_类型的对象。这种隐式转换可能不是程序员所期望的，尤其是在复杂的程序中，它可能导致难以追踪的错误。</p></li><li><p>使用explicit关键字：为了避免这种隐式转换，可以在构造函数前加上<em>explicit</em>关键字。这样，编译器就会阻止隐式转换，除非显式地调用构造函数。</p></li></ul><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">class MyClass {</span>
<span class="line">	public:</span>
<span class="line">		explicit MyClass(int value) : _value(value) {}</span>
<span class="line">	private:</span>
<span class="line">		int _value;</span>
<span class="line">};</span>
<span class="line">MyClass obj = 10; // 错误：不能隐式转换</span>
<span class="line">MyClass obj(10); // 正确：显式调用构造函数</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在这个例子中，_=<em>explicit</em>关键字确保了MyClass对象的创建必须明确地调用构造函数。这样可以提高代码的清晰度和安全性。</li></ul><h2 id="_13-找最大值的索引" tabindex="-1"><a class="header-anchor" href="#_13-找最大值的索引"><span>13 找最大值的索引</span></a></h2><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line">auto maxit = max_element(nums.begin() + i, nums.end());</span>
<span class="line">int maxindex = distance(nums.begin(), maxit);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-单例模式" tabindex="-1"><a class="header-anchor" href="#_14-单例模式"><span>14 单例模式</span></a></h2><ul><li><p>单例模式可以分为 懒汉式 和 饿汉式 ，两者之间的区别在于创建实例的时间不同。</p></li><li><p>懒汉式：系统运行中，实例并不存在，只有当需要使用该实例时，才会去创建并使用实例。这种方式要考虑线程安全。</p></li><li><p>饿汉式：系统一运行，就初始化创建实例，当需要时，直接调用即可。这种方式本身就线程安全，没有多线程的线程安全问题。</p></li></ul><h3 id="单例类的特点" tabindex="-1"><a class="header-anchor" href="#单例类的特点"><span>单例类的特点</span></a></h3><ul><li>构造函数和析构函数为私有类型，目的是禁止外部构造和析构。</li><li>拷贝构造函数和赋值构造函数是私有类型，目的是禁止外部拷贝和赋值，确保实例的唯一性。</li><li>类中有一个获取实例的静态方法，可以全局访问。</li></ul><h3 id="懒汉单例-静态局部变量" tabindex="-1"><a class="header-anchor" href="#懒汉单例-静态局部变量"><span>懒汉单例(静态局部变量)</span></a></h3><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//.h</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Single</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">static</span> Single<span class="token operator">&amp;</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 获取单实例对象</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 打印实例地址</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">    <span class="token function">Single</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">;</span><span class="token comment">// 禁止外部构造</span></span>
<span class="line">    <span class="token operator">~</span><span class="token function">Single</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">;</span><span class="token comment">// 禁止外部析构</span></span>
<span class="line">    <span class="token function">Single</span><span class="token punctuation">(</span><span class="token keyword">const</span> Single <span class="token operator">&amp;</span>single<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span><span class="token comment">// 禁止外部拷贝构造</span></span>
<span class="line">    <span class="token keyword">const</span> Single <span class="token operator">&amp;</span><span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">const</span> Single <span class="token operator">&amp;</span>single<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span><span class="token comment">// 禁止外部赋值操作</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//.cpp</span></span>
<span class="line">Single<span class="token operator">&amp;</span> <span class="token class-name">Single</span><span class="token double-colon punctuation">::</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/**</span>
<span class="line">     * 局部静态特性的方式实现单实例。</span>
<span class="line">     * 静态局部变量只在当前函数内有效，其他函数无法访问。</span>
<span class="line">     * 静态局部变量只在第一次被调用的时候初始化，也存储在静态存储区，生命周期从第一次被初始化起至程序结束止。</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">static</span> Single single<span class="token punctuation">;</span><span class="token comment">// C++11 保证静态局部变量初始化的线程安全</span></span>
<span class="line">    <span class="token keyword">return</span> single<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token class-name">Single</span><span class="token double-colon punctuation">::</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;我的实例内存地址是:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token keyword">this</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token class-name">Single</span><span class="token double-colon punctuation">::</span><span class="token function">Single</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;构造函数&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token class-name">Single</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">Single</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;析构函数&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>[!NOTE] 现代 C++（C++11 及更高版本）中，<strong>静态局部变量的初始化是线程安全的</strong>，编译器会自动处理同步问题，确保只有一个线程能初始化该变量。</p></blockquote><ul><li><strong>静态变量的生命周期</strong>：<code>instance</code> 的内存从程序启动到结束一直存在。</li><li><strong>初始化的唯一性</strong>：编译器确保 <code>instance</code> 仅在首次调用时初始化。</li><li><strong>线程安全</strong>（C++11+）：标准强制要求静态变量初始化的原子性，避免多线程冲突。</li></ul><h3 id="饿汉单例-类唯一静态成员变量" tabindex="-1"><a class="header-anchor" href="#饿汉单例-类唯一静态成员变量"><span>饿汉单例(类唯一静态成员变量)</span></a></h3><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Single</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">static</span> Single<span class="token operator">&amp;</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">    <span class="token function">Single</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token operator">~</span><span class="token function">Single</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">Single</span><span class="token punctuation">(</span><span class="token keyword">const</span> Single<span class="token operator">&amp;</span> single<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span></span>
<span class="line">    Single<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">const</span> Single<span class="token operator">&amp;</span> single<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 静态成员变量（类加载时初始化）</span></span>
<span class="line">    <span class="token keyword">static</span> Single instance<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//.cpp</span></span>
<span class="line"></span>
<span class="line">Single Single<span class="token double-colon punctuation">::</span>instance<span class="token punctuation">;</span><span class="token comment">// 全局初始化实例</span></span>
<span class="line">Single<span class="token operator">&amp;</span> <span class="token class-name">Single</span><span class="token double-colon punctuation">::</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> single<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token class-name">Single</span><span class="token double-colon punctuation">::</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;我的实例内存地址是:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token keyword">this</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Single</span><span class="token double-colon punctuation">::</span><span class="token function">Single</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;构造函数&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token class-name">Single</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">Single</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;析构函数&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>[!NOTE] <strong>静态成员变量的初始化发生在程序启动阶段</strong>（main 函数执行前）。具体时机由编译器和运行时环境决定，但<strong>保证在任何代码访问该类之前完成初始化</strong>。</p></blockquote><ul><li>由于初始化发生在<strong>单线程环境</strong>（main 函数启动前），因此<strong>天然线程安全</strong>，无需加锁。</li></ul><h2 id="_15-静态成员" tabindex="-1"><a class="header-anchor" href="#_15-静态成员"><span>15 静态成员</span></a></h2><h3 id="静态成员变量" tabindex="-1"><a class="header-anchor" href="#静态成员变量"><span>静态成员变量</span></a></h3><ul><li><p>类的静态成员变量不能类内初始化，但是可以为静态成员提供const整数类型的类内初始值。不过要求静态成员必须是字面值常量类型的constexpr。</p></li><li><p>C++ 要求静态成员变量必须在类外<strong>显式定义</strong>（除非是 <code>constexpr</code> 常量）。</p></li><li><p>类的声明只是类型定义，不分配实际内存，静态成员变量需要独立于类的实例存在。</p></li></ul><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//静态成员变量的声明与定义</span></span>
<span class="line"><span class="token keyword">static</span> Singleton instance<span class="token punctuation">;</span><span class="token comment">//仅在类内声明变量，未分配内存。</span></span>
<span class="line">Singleton Singleton<span class="token double-colon punctuation">::</span>instance<span class="token punctuation">;</span><span class="token comment">//在类外定义变量，此时才分配内存并调用构造函数。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态成员函数" tabindex="-1"><a class="header-anchor" href="#静态成员函数"><span>静态成员函数</span></a></h3><ul><li>类的静态成员函数可以类内/类外实现</li></ul>`,35)),l("p",null,[e(a,{to:"/guide/knowledge/C++/C++%E6%A0%B8%E5%BF%83%E7%BC%96%E7%A8%8B.html#_4.2.8%20%E9%9D%99%E6%80%81%E6%88%90%E5%91%98"},{default:p(()=>n[1]||(n[1]=[i("4.2.8 静态成员")])),_:1,__:[1]})]),n[4]||(n[4]=s(`<h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板"><span>模板</span></a></h2><h3 id="函数模板" tabindex="-1"><a class="header-anchor" href="#函数模板"><span>函数模板</span></a></h3><ul><li><strong>定义</strong>：定义一个通用函数，允许参数或返回值的类型在调用时指定。</li><li><strong>语法</strong>：使用 <code>template &lt;typename T&gt;</code> 声明，后跟函数定义。</li></ul><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//交换的函数模板</span></span>
<span class="line"><span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">mySwap</span><span class="token punctuation">(</span>T <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> T<span class="token operator">&amp;</span>b<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	T temp <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line">	a <span class="token operator">=</span> b<span class="token punctuation">;</span></span>
<span class="line">	b <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token comment">// 也可以替换成typename</span></span>
<span class="line"><span class="token comment">//利用选择排序，进行对数组从大到小的排序</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">mySort</span><span class="token punctuation">(</span>T arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">int</span> max <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">//最大数的下标</span></span>
<span class="line">		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>max<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				max <span class="token operator">=</span> j<span class="token punctuation">;</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token comment">//如果最大数的下标不是i，交换两者</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			<span class="token function">mySwap</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">printArray</span><span class="token punctuation">(</span>T arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//测试char数组</span></span>
<span class="line">	<span class="token keyword">char</span> charArr<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;bdcfeagh&quot;</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>charArr<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">mySort</span><span class="token punctuation">(</span>charArr<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">printArray</span><span class="token punctuation">(</span>charArr<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//测试int数组</span></span>
<span class="line">	<span class="token keyword">int</span> intArr<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>intArr<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">mySort</span><span class="token punctuation">(</span>intArr<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">printArray</span><span class="token punctuation">(</span>intArr<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类模板" tabindex="-1"><a class="header-anchor" href="#类模板"><span>类模板</span></a></h3><ul><li><strong>定义</strong>：定义一个通用类，允许成员变量或成员函数的类型在实例化时指定。</li><li><strong>语法</strong>：使用 <code>template &lt;class T&gt;</code> 声明，后跟类定义。</li></ul><blockquote><p>[!NOTE] 头文件声明的作用，就是让编译器知道，这个函数的定义应该在其他文件中，就不会因为暂时找不到函数的定义而报错。至于找到对应的定义，就是链接器需要干的事情。</p></blockquote><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//.h文件</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> T<span class="token operator">&amp;</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span>T a<span class="token punctuation">,</span> T b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    T value<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//.cpp文件</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&quot;SingleTon.h&quot;</span></span></span>
<span class="line"><span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token class-name">MyClass</span><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span><span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token class-name">MyClass</span><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span><span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> T<span class="token operator">&amp;</span>val<span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">value</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token class-name">MyClass</span><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span><span class="token function">func</span><span class="token punctuation">(</span>T a<span class="token punctuation">,</span> T b<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	T temp <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line">	a <span class="token operator">=</span> b<span class="token punctuation">;</span></span>
<span class="line">	b <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//main.cpp文件</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;SingleTon.h&quot;</span></span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	MyClass<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> myclass<span class="token punctuation">;</span></span>
<span class="line">	myclass<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>SingleToncpp编译时，编译器<strong>没有看到任何具体的实例化类型</strong>（如 <code>SingleTon&lt;int&gt;</code>），因此不会生成 <code>func()</code> 函数的实际代码。</p></li><li><p>模板代码（如 <code>template &lt;typename T&gt; void MyClass&lt;T&gt;::func()</code>）本身不会被编译成目标代码，只是 “蓝图”。</p></li><li><p>链接阶段就会报错：<code>main.cpp</code> 中使用了 <code>MyClass&lt;int&gt;::func()</code>，但 <code>SingleTon.o</code> 中没有该函数的实现，导致链接器无法找到符号定义。 <img src="`+r+`" alt=""></p></li><li><p>所以写在同一个hpp文件中，就不存在上述问题了</p></li></ul><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">//myclass.hpp</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> T<span class="token operator">&amp;</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span>T a<span class="token punctuation">,</span> T b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    T value<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token class-name">MyClass</span><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span><span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token class-name">MyClass</span><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span><span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> T<span class="token operator">&amp;</span> val<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">value</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token class-name">MyClass</span><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span><span class="token function">func</span><span class="token punctuation">(</span>T a<span class="token punctuation">,</span> T b<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    T temp <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line">    a <span class="token operator">=</span> b<span class="token punctuation">;</span></span>
<span class="line">    b <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//main.cpp</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;myclass.hpp&quot;</span></span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	MyClass<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> myclass<span class="token punctuation">;</span></span>
<span class="line">	myclass<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对比" tabindex="-1"><a class="header-anchor" href="#对比"><span>对比</span></a></h3><ul><li><p><strong>函数模板</strong>是为了实现与类型无关的通用函数，依赖调用时的类型推导；</p></li><li><p><strong>类模板</strong>是为了创建通用的类结构，需在实例化时显式指定类型参数。</p></li><li><p>函数模板不能部分特化：函数模板只能全特化（如 <code>template&lt;&gt; void swap&lt;int&gt;(int&amp;, int&amp;)</code>），但类模板可以偏特化（如 <code>template&lt;typename T&gt; class Vector&lt;T*&gt;</code>）。</p><ul><li><strong>全特化（Full Specialization）</strong>：为模板的<strong>所有模板参数</strong>指定具体类型，形成一个完全确定的版本。</li><li><strong>偏特化（Partial Specialization）</strong>：为模板的<strong>部分模板参数</strong>指定具体类型，保留其他参数作为模板参数（即 “部分特化，部分泛化”）。</li><li>C++ 标准明确禁止函数模板的偏特化，原因是 <strong>函数重载（Function Overloading）可以完美替代偏特化的需求</strong>，无需额外引入偏特化机制。</li><li>类模板没有 “重载” 机制，因此需要偏特化来针对部分类型定制逻辑。偏特化的类模板与通用模板是不同的类，但共享模板名称。</li></ul></li><li><p>类模板实例化必须显式指定类型：函数调用可以自动推导类型，但类实例化必须显式指定（如 <code>Vector&lt;int&gt;</code>），除非使用 C++17 的类模板参数推导（如 <code>std::pair p(1, &quot;hello&quot;);</code>）。</p></li></ul><table><thead><tr><th style="text-align:center;"><strong>特性</strong></th><th><strong>函数模板</strong></th><th><strong>类模板</strong></th></tr></thead><tbody><tr><td style="text-align:center;"><strong>实例化触发方式</strong></td><td>函数调用时自动推导或显式指定</td><td>必须显式指定模板参数（如 <code>Vector&lt;int&gt;</code>）</td></tr><tr><td style="text-align:center;"><strong>类型推导</strong></td><td>支持自动类型推导（如 <code>max(1, 2)</code>）</td><td>不支持自动推导，需显式指定类型</td></tr><tr><td style="text-align:center;"><strong>特化（Specialization）</strong></td><td>支持全特化（如 <code>template&lt;&gt; int max&lt;int&gt;(int, int)</code>）</td><td>支持全特化和偏特化（如 <code>template&lt;typename T&gt; class Vector&lt;T*&gt;</code>）</td></tr><tr><td style="text-align:center;"><strong>默认模板参数</strong></td><td>C++11 起支持（如 <code>template&lt;typename T = int&gt;</code>）</td><td>支持，且更常见（如 <code>template&lt;typename T = int&gt; class Stack</code>）</td></tr><tr><td style="text-align:center;"><strong>用途</strong></td><td>通用算法（如 <code>std::sort</code>、<code>std::swap</code>）</td><td>容器类（如 <code>std::vector</code>、<code>std::map</code>）、工具类</td></tr></tbody></table><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><ul><li><p>static_cast&lt;&gt;</p></li><li><p>inline</p></li><li><p>类的构造函数加冒号后面可以初始化成员变量也可以初始化父类。 类中包含以下成员，必须放在初始化列表位置进行初始化：</p></li></ul><ol start="2"><li>引用成员变量</li><li>const成员变量</li><li>自定义类型成员(该类没有默认构造函数)</li></ol><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code class="language-C"><span class="line"></span>
<span class="line">for (auto&amp; t : threads) {</span>
<span class="line">	t.join();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移动语义 右值引用</p><p>左值引用，右值引用，万能引用 完美转发 hpp文件Qt中好像用到了</p><p>可移动对象 for each</p>`,20))])}const g=t(v,[["render",k]]),h=JSON.parse('{"path":"/guide/knowledge/C__%E5%9F%BA%E7%A1%80.html","title":"C++基础","lang":"zh-CN","frontmatter":{},"git":{},"filePathRelative":"guide/knowledge/C++基础.md"}');export{g as comp,h as data};
