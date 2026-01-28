import{_ as n,c as a,d as e,o as l}from"./app-O9I-yMSb.js";const i="/Yanran_blog/assets/%E6%95%B0%E6%8D%AE%E5%BA%93-CuOO--NS.png",t={};function p(r,s){return l(),a("div",null,s[0]||(s[0]=[e('<h1 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库"><span>数据库</span></a></h1><h2 id="_1-基础" tabindex="-1"><a class="header-anchor" href="#_1-基础"><span>1. 基础</span></a></h2><ul><li><code>SQL</code>, 全称为Structured Query Language（结构化查询语言)。 要讲SQL就绕不开database(数据库), 平时所说的数据库，一般就是指的 <code>Relational database(关系型数据库)</code>.</li><li>数据库本质是个软件，是个服务器软件</li><li>写SQL是写在客户端里，实现从数据库里筛选处理数据</li></ul><h2 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法"><span>2. 语法</span></a></h2><p>count是对分完组后的每个组的数据统计，没有group by相当于所有数据是一个组。</p><h2 id="_3-linux使用mysql" tabindex="-1"><a class="header-anchor" href="#_3-linux使用mysql"><span>3. Linux使用MySql</span></a></h2><h3 id="_3-1-充分必要性" tabindex="-1"><a class="header-anchor" href="#_3-1-充分必要性"><span>3.1 充分必要性</span></a></h3><ul><li>如果一个项目是动态（内容会变化的，网页后缀.jsp、.php、.shtml等）内容的话，则数据库是必不可少的一个环节。</li></ul><p><img src="'+i+`" alt=""></p><ul><li>MySQL是一个关系型数据库管理系统，开源、跨平台、所占内存较小。</li></ul><h3 id="_3-2-mysql安装" tabindex="-1"><a class="header-anchor" href="#_3-2-mysql安装"><span>3.2 MySQL安装</span></a></h3><ul><li>mysql默认端口号是3306</li><li>数据库存储目录：/var/lib/mysql</li><li>配置文件：/etc/my.cnf</li></ul><table><thead><tr><th style="text-align:center;">步骤</th><th style="text-align:center;">指令</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">安装服务端</td><td style="text-align:center;">yum install mysql-server</td><td style="text-align:left;">注意是服务端。不是客户端</td></tr><tr><td style="text-align:center;">启动mysql</td><td style="text-align:center;">systemctl start mysqld</td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">初始化</td><td style="text-align:center;">mysql_secure_installation</td><td style="text-align:left;">设置密码，是否允许远程登录等</td></tr><tr><td style="text-align:center;">启动/关闭/重启</td><td style="text-align:center;">systemctl start/stop/restart mysqld</td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">进入mysql</td><td style="text-align:center;">mysql -u 用户名 -p [密码]</td><td style="text-align:left;">建议这里不要输入密码，是明文显示</td></tr><tr><td style="text-align:center;">退出mysql</td><td style="text-align:center;">exit</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="_3-3-mysql操作" tabindex="-1"><a class="header-anchor" href="#_3-3-mysql操作"><span>3.3 MySQL操作</span></a></h3><ul><li>文件层级：数据库，数据表，记录（行），字段（列）。</li><li>MySQL指令不区分大小写</li><li>显示指定连接字符集，避免中文乱码，每次连接MySQL后都需要设置。Mysql&gt; set names utf-8</li><li>三码一致：服务器数据库的字符集+传输过程中字符集（set names）+客户端终端字符集</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL"><pre><code class="language-SQL"><span class="line">//库操作</span>
<span class="line">SHOW DATABASES;//显示当前MySQL中全部的数据库</span>
<span class="line">CREATE DATABASE 库名;//创建数据库</span>
<span class="line">DROP DATABASE 库名;//删除数据库</span>
<span class="line">USE 库名;//切换数据库</span>
<span class="line"></span>
<span class="line">//表操作</span>
<span class="line">CREATE TABLES 表名称 (</span>
<span class="line">	列名称1 数据类型 [NOT NULL AUTO_INCREMENT],</span>
<span class="line">	列名称2 数据类型,</span>
<span class="line">	列名称3 数据类型,</span>
<span class="line">	...,</span>
<span class="line">	PRIMARY KEY(主键字段名)</span>
<span class="line">);</span>
<span class="line">Create table oo(</span>
<span class="line">	Id int(11) not null auto_increment,</span>
<span class="line">	Username varchar(20),</span>
<span class="line">	Password char(32),</span>
<span class="line">	Primary key(Id)</span>
<span class="line">);</span>
<span class="line">//常见的数据类型：int（整型）、char（定长字符）、varchar（不定长字符）。</span>
<span class="line">//主键一般就是序号所在的那一列，主键不能重复。</span>
<span class="line">SHOW TABLES;</span>
<span class="line">DESC 表名;//查看表的结构</span>
<span class="line">DROP TABLE [IF EXISTS] 表名;//删除数据表</span>
<span class="line"></span>
<span class="line">//记录操作</span>
<span class="line">INSERT INTO 表名称 VALUES (值1, 值2,....);</span>
<span class="line">INSERT INTO 表名称 (列1,列2,...) VALUES (值1,值2,....);</span>
<span class="line">UPDATE 表名称 SET 列名称1 = 新值1,列名称2 = 新值2,… WHERE 列名称 = 某值;</span>
<span class="line">SELECT 列名称1,列名称2,… FROM 表名称 WHERE 条件;</span>
<span class="line">SELECT \\* FROM 表名称 WHERE 条件;</span>
<span class="line">DELETE FROM 表名称 WHERE 列名称 = 值;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>以下关于MySQL整体的操作是在bash环境下执行，需要退出MySQL</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">//备份（导出）</span>
<span class="line">//导出其实只有表操作，没有库级的操作</span>
<span class="line">mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span> <span class="token parameter variable">-A</span> <span class="token operator">&gt;</span> 备份文件路径//全量备份（数据+结构）</span>
<span class="line">mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span> 库名 <span class="token operator">&gt;</span> 备份文件路径//指定库备份（数据+结构）</span>
<span class="line">mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span> <span class="token parameter variable">--databases</span> db1 db2 <span class="token operator">&gt;</span> 备份文件路径//指定多个库备份（数据+结构）</span>
<span class="line"></span>
<span class="line">//还原（导入）</span>
<span class="line">//mysql命令行source还原方法</span>
<span class="line">//系统命令行还原方法</span>
<span class="line"></span>
<span class="line">mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">source</span> 备份文件路径//mysql还原全部数据库:</span>
<span class="line">mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span> <span class="token operator">&lt;</span> 备份文件路径//linux还原全部数据库</span>
<span class="line"></span>
<span class="line">//<span class="token punctuation">(</span>需指定数据库名，因为单个库的备份是没有库名字的，即需要先搭好新库，在新库里source<span class="token punctuation">)</span></span>
<span class="line">use 库名</span>
<span class="line"><span class="token builtin class-name">source</span> 备份文件路径//mysql还原指定单个数据库，mysql还原指定数据库的表</span>
<span class="line">mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span> 库名 <span class="token operator">&lt;</span> 备份文件路径//linux还原指定单个数据库，linux还原指定数据库的表</span>
<span class="line"></span>
<span class="line">//（一个备份文件里有多个数据库的备份，此时不需要指定数据库）</span>
<span class="line"><span class="token builtin class-name">source</span> 备份文件路径//mysql还原指定多个数据库</span>
<span class="line">mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span> <span class="token operator">&lt;</span> 备份文件路径//linux还原指定多个数据库</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>脚本执行定期备份demo</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token comment">## 在计划任务中执行该Shell脚本</span></span>
<span class="line"><span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token string">&quot;test_&quot;</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&#39;%Y%m%d%H%M%S&#39;</span><span class="token variable">\`</span></span><span class="token string">&quot;.sql&quot;</span></span>
<span class="line">mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span> <span class="token builtin class-name">test</span> <span class="token operator">&gt;</span> /root/<span class="token variable">$filename</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-mysql远程连接" tabindex="-1"><a class="header-anchor" href="#_3-4-mysql远程连接"><span>3.4 MySQL远程连接</span></a></h3><ul><li>B/S：B是指浏览器，S是指服务器。例如：百度搜索应用就属于BS架构软件。</li><li>C/S：C是指客户端，S是指服务器。例如：QQ、电脑端微信等应用程序都是CS架构。</li><li>BS中mysql典型的管理工具：PMA（phpMyAdmin）</li><li>CS中mysql典型的软件：navicat、mysql workbrach</li></ul><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql"><pre><code class="language-mysql"><span class="line">//- 修改可以远程连接的主机与用户字段，其位于mysql数据库的user表中的host，user字段。</span>
<span class="line">mysql&gt; use mysql;</span>
<span class="line"></span>
<span class="line">//修改链接地址,实现远程连接数据库，有利于数据库和服务分离。host字段为“%”表示任意主机ip。</span>
<span class="line">mysql&gt; select host,user from user;</span>
<span class="line">mysql&gt; update user set host=&#39;%&#39; where user=&#39;root&#39;;</span>
<span class="line">mysql&gt; commit;</span>
<span class="line"></span>
<span class="line">//修改后需要刷新权限表（\`mysql&gt; flush privileges\`）或者重启mysql。</span>
<span class="line">systemctl restart mysqld.service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23)]))}const d=n(t,[["render",p]]),m=JSON.parse('{"path":"/guide/knowledge/%E6%95%B0%E6%8D%AE%E5%BA%93.html","title":"数据库","lang":"zh-CN","frontmatter":{},"git":{},"filePathRelative":"guide/knowledge/数据库.md"}');export{d as comp,m as data};
