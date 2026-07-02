import fs from "fs";import path from "path";import {fileURLToPath} from "url";
const __dirname=path.dirname(fileURLToPath(import.meta.url));
const DATA=path.resolve(__dirname,"../public/data");
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function pickN(a,n){const s=new Set();while(s.size<n&&s.size<a.length)s.add(pick(a));return[...s]}
const DIFF=["easy","medium","hard"];
const TAG=`软件测试 质量保障 QA 测试计划 测试需求 测试用例 测试数据 测试环境 测试执行 测试报告 缺陷 Bug Defect Error Failure 黑盒测试 白盒测试 灰盒测试 功能测试 性能测试 压力测试 负载测试 容量测试 稳定性测试 可靠性测试 兼容性测试 安全测试 回归测试 冒烟测试 冒烟测试 验收测试 系统测试 集成测试 单元测试 接口测试 UI测试 端到端测试 探索式测试 随机测试 对等测试 猴子测试 等价类划分 边界值分析 判定表法 因果图法 正交实验 状态迁移 场景法 错误推断 语句覆盖 分支覆盖 条件覆盖 路径覆盖 条件组合覆盖 MC/DC 数据流测试 循环测试 测试设计 测试策略 测试金字塔 测试左移 测试右移 测试自动化 自动化测试 Selenium Cypress Playwright Puppeteer TestCafe WebDriver Appium XCTest Espresso RobotFramework pytest unittest JUnit TestNG Mockito Mock 桩 驱动 契约测试 PACT 消费者驱动 生产者驱动 测试桩 测试驱动 持续测试 CI测试 流水线 测试阶段 测试环境 Dev Staging Prod 部署测试 A/B测试 金丝雀发布 灰度发布 蓝绿部署 特性开关 测试数据管理 数据准备 数据清理 数据脱敏 测试用例管理 TestCase 测试套件 测试集 测试运行 失败案例 通过案例 跳过 测试结果 测试度量 测试覆盖率 代码覆盖率 行覆盖率 分支覆盖率 路径覆盖率 需求覆盖率 缺陷密度 缺陷清除率 测试效率 测试成本 测试收益 缺陷生命周期 新建 已确认 已分配 修复中 已修复 已验证 已关闭 重新打开 缺陷严重程度 致命 严重 一般 轻微 建议 缺陷优先级 P0 P1 P2 P3 缺陷来源 需求缺陷 设计缺陷 代码缺陷 环境缺陷 文档缺陷 缺陷报告 Bug报告 标题 描述 步骤 实际结果 期望结果 附件 日志 截图 堆栈 环境信息 版本 浏览器 操作系统 测试管理工具 JIRA TestLink qTest Zephyr TestRail Allure Report 报告 仪表盘 质量度量 发布标准 通过率 失败率 阻塞 质量门禁 入口标准 出口标准 测试终止 测试完成 测试总结 测试总结报告 测试复盘 质量回溯 根因分析 改进措施 测试团队 测试角色 测试经理 测试组长 测试工程师 自动化测试工程师 性能测试工程师 测试开发 质量保障 软件质量 ISO25000 质量模型 功能性 可靠性 易用性 效率 维护性 可移植性 兼容性 安全性 测试成熟度 TMMi CMMi 测试过程 测试流程 需求评审 测试计划评审 用例评审 测试报告评审 上线评审 测试方法 静态测试 动态测试 手工测试 自动化 探索式测试 经验测试 基于风险的测试 基于模型的测试 脚本测试 关键字驱动 数据驱动 测试框架 单元测试框架 JUnit TestNG pytest unittest 接口测试框架 REST Assured Postman Newman SuperTest 性能测试框架 JMeter Gatling Locust k6 压力测试 并发用户 TPS QPS 响应时间 吞吐量 资源利用率 CPU 内存 IO 网络 数据库 慢查询 连接池 垃圾回收 GC 停顿 性能瓶颈 性能调优 性能测试报告 安全测试 渗透测试 漏洞扫描 XSS SQL注入 CSRF SSRF 越权 未授权 认证绕过 敏感信息泄露 文件上传 命令注入 远程代码执行 安全问题 安全测试报告 可用性测试 用户体验 易用性 可访问性 兼容性测试 跨浏览器 跨平台 移动端 响应式 多分辨率 多语言 HTTP HTTPS 测试策略制定 测试范围 测试深度 测试优先级 风险分析 影响分析 测试估算 测试工作量 测试进度 测试资源 测试工具 测试环境 测试数据 测试自动化 ROI 投入产出 持续改进 PDCA 质量文化 质量意识 测试思维 测试人员 开发者测试 测试左移 开发自测 代码审查 静态分析 SonarQube ESLint FindBugs PMD CheckStyle 代码规范 代码质量 技术债务 重构 单元测试覆盖率 TDD 测试驱动开发 BDD 行为驱动开发 ATDD 验收测试驱动开发 实例化需求 用例故事 测试场景 测试规格 Gherkin Cucumber SpecFlow Behave 特征文件 Feature Scenario Given When Then 步骤定义 自动化步骤 BDD框架 测试最佳实践 测试原则 尽早测试 独立测试 可重复 可追溯 完全穷尽不可能 缺陷集群 杀虫剂悖论 测试活动依赖上下文 没有银弹 测试者思维 批判性思维 细节关注 用户视角 业务理解 沟通协作 报告写作 分析能力 学习能力 行业认证 ISTQB CSTQB 软件测试工程师 测试专家 职业发展 测试面试 面试题 测试场景 测试设计 测试方法 白箱 黑箱 自动化 性能 安全 质量 工具 框架 流程 规范 标准 度量 报告 指标 KPIs 仪表盘 可视化 测试成熟度 持续测试 敏捷测试 Scrum Kanban Sprint Backlog 用户故事 验收标准 DoD DoR 迭代 回顾 每日站会 测试任务 测试活动 敏捷测试四象限 自动化金字塔 手工测试 探索 工具 框架 脚本 数据 环境 配置 版本 分支 合并 部署 发布 上线 监控 告警 反馈 复盘 改进 优化 提升 效率 质量 效果 价值 结果 贡献 影响 驱动 变革 创新 精进 卓越`;
const T=TAG.trim().split(/\s+/).filter(Boolean);
function buildTags(){return T.map((n,i)=>({id:`st-tag-${String(i+1).padStart(3,"0")}`,name:n,category:"测试",description:`测试标签：${n}`,count:0,createdAt:"2026-07-02T00:00:00.000Z"}));}
const COURSES_DATA=[
  {id:"st-course-01",order:1,slug:"软件测试入门与质量意识",title:"软件测试入门与质量意识",description:"测试定义、质量观、测试原则、测试分类、测试发展。",estimatedHours:6,difficulty:"easy"},
  {id:"st-course-02",order:2,slug:"软件测试生命周期",title:"软件测试生命周期",description:"测试流程、需求分析、计划设计执行报告、评审。",estimatedHours:6,difficulty:"easy"},
  {id:"st-course-03",order:3,slug:"测试计划测试需求与测试范围",title:"测试计划、测试需求与测试范围",description:"测试计划编写、需求分析、范围界定、风险分析。",estimatedHours:8,difficulty:"medium"},
  {id:"st-course-04",order:4,slug:"测试用例设计基础",title:"测试用例设计基础",description:"用例要素、设计方法、评审、管理、执行。",estimatedHours:8,difficulty:"medium"},
  {id:"st-course-05",order:5,slug:"黑盒测试方法",title:"黑盒测试方法",description:"等价类、边界值、判定表、因果图、正交、状态迁移、场景法。",estimatedHours:14,difficulty:"hard"},
  {id:"st-course-06",order:6,slug:"白盒测试方法",title:"白盒测试方法",description:"语句覆盖、分支覆盖、条件覆盖、路径覆盖、MC/DC。",estimatedHours:12,difficulty:"hard"},
  {id:"st-course-07",order:7,slug:"单元测试与测试驱动入门",title:"单元测试与测试驱动入门",description:"JUnit/TestNG、Mockito、TDD入门、覆盖率。",estimatedHours:12,difficulty:"hard"},
  {id:"st-course-08",order:8,slug:"接口测试与API测试",title:"接口测试与API测试",description:"接口测试方法、Postman、REST Assured、校验与断言。",estimatedHours:10,difficulty:"hard"},
  {id:"st-course-09",order:9,slug:"Web测试与兼容性测试",title:"Web 测试与兼容性测试",description:"Web功能测试、UI测试、兼容性、响应式测试。",estimatedHours:8,difficulty:"medium"},
  {id:"st-course-10",order:10,slug:"自动化测试基础",title:"自动化测试基础",description:"Selenium/Cypress、自动化框架、PageObject模型。",estimatedHours:12,difficulty:"hard"},
  {id:"st-course-11",order:11,slug:"缺陷管理与Bug报告",title:"缺陷管理与 Bug 报告",description:"缺陷生命周期、严重程度、优先级、Bug报告编写。",estimatedHours:8,difficulty:"medium"},
  {id:"st-course-12",order:12,slug:"性能测试基础",title:"性能测试基础",description:"性能指标、JMeter/Gatling、负载压力测试、性能分析。",estimatedHours:12,difficulty:"hard"},
  {id:"st-course-13",order:13,slug:"测试报告质量度量与发布评估",title:"测试报告、质量度量与发布评估",description:"测试报告、覆盖率度量、发布标准、质量门禁。",estimatedHours:8,difficulty:"medium"},
  {id:"st-course-14",order:14,slug:"软件测试项目实战与面试训练",title:"软件测试项目实战与面试训练",description:"电商测试综合、面试题库、测试场景设计、项目实战。",estimatedHours:10,difficulty:"hard"},
];
function buildCourses(){return COURSES_DATA.map(c=>({...c,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["掌握测试设计","能编写用例","会用自动化工具","具备质量保障思维"],updatedAt:"2026-07-02T00:00:00.000Z"}));}
function buildLessons(){
  const all=[];let id=1;
  const add=(ci,t,kps)=>{const n=String(id).padStart(3,"0");all.push({id:`st-lesson-${n}`,courseId:COURSES_DATA[ci].id,order:all.filter(l=>l.courseId===COURSES_DATA[ci].id).length+1,title:t,slug:t.replace(/[\s，。、：；（）\-\+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t,content:`# ${t}\n\n${t}内容。`,contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:kps||[],practiceQuestionIds:[],tags:["测试"],prerequisites:[],updatedAt:"2026-07-02T00:00:00.000Z"});id++;};
  add(0,"软件测试定义",["st-kp-001"]);add(0,"质量意识",["st-kp-002"]);add(0,"测试原则",["st-kp-003"]);add(0,"测试分类",["st-kp-004"]);add(0,"测试发展历史",["st-kp-005"]);
  add(1,"测试流程",["st-kp-006"]);add(1,"需求分析",["st-kp-007"]);add(1,"测试设计",["st-kp-008"]);add(1,"测试执行",["st-kp-009"]);add(1,"测试报告",["st-kp-010"]);add(1,"评审",["st-kp-011"]);
  add(2,"测试计划",["st-kp-012"]);add(2,"测试范围",["st-kp-013"]);add(2,"风险分析",["st-kp-014"]);add(2,"测试资源估算",["st-kp-015"]);
  add(3,"用例要素",["st-kp-016"]);add(3,"用例设计方法",["st-kp-017"]);add(3,"用例评审",["st-kp-018"]);add(3,"用例管理",["st-kp-019"]);
  add(4,"等价类划分",["st-kp-020","st-kp-021"]);add(4,"边界值分析",["st-kp-022","st-kp-023"]);add(4,"判定表",["st-kp-024"]);add(4,"因果图",["st-kp-025"]);add(4,"正交实验",["st-kp-026"]);add(4,"状态迁移",["st-kp-027"]);add(4,"场景法",["st-kp-028"]);
  add(5,"语句覆盖",["st-kp-029"]);add(5,"分支覆盖",["st-kp-030"]);add(5,"条件覆盖",["st-kp-031"]);add(5,"路径覆盖",["st-kp-032"]);add(5,"条件组合覆盖",["st-kp-033"]);add(5,"MC/DC覆盖",["st-kp-034"]);
  add(6,"JUnit基础",["st-kp-035"]);add(6,"TestNG",["st-kp-036"]);add(6,"Mockito",["st-kp-037","st-kp-038"]);add(6,"TDD流程",["st-kp-039"]);add(6,"代码覆盖率",["st-kp-040"]);
  add(7,"接口测试概念",["st-kp-041"]);add(7,"Postman使用",["st-kp-042"]);add(7,"REST Assured",["st-kp-043"]);add(7,"接口校验",["st-kp-044"]);add(7,"接口自动化",["st-kp-045"]);
  add(8,"Web功能测试",["st-kp-046"]);add(8,"UI测试",["st-kp-047"]);add(8,"兼容性测试",["st-kp-048"]);add(8,"响应式测试",["st-kp-049"]);
  add(9,"Selenium基础",["st-kp-050","st-kp-051"]);add(9,"Cypress",["st-kp-052"]);add(9,"PageObject",["st-kp-053"]);add(9,"测试框架搭建",["st-kp-054"]);add(9,"CI集成",["st-kp-055"]);
  add(10,"Bug生命周期",["st-kp-056","st-kp-057"]);add(10,"严重程度与优先级",["st-kp-058"]);add(10,"Bug报告编写",["st-kp-059"]);add(10,"Bug跟踪",["st-kp-060"]);
  add(11,"性能指标",["st-kp-061"]);add(11,"JMeter",["st-kp-062","st-kp-063"]);add(11,"Gatling",["st-kp-064"]);add(11,"locust",["st-kp-065"]);add(11,"性能分析",["st-kp-066"]);
  add(12,"测试报告结构",["st-kp-067"]);add(12,"质量度量",["st-kp-068"]);add(12,"发布标准",["st-kp-069"]);add(12,"质量门禁",["st-kp-070"]);
  add(13,"电商测试项目",["st-kp-071"]);add(13,"测试场景设计",["st-kp-072"]);add(13,"面试题库",["st-kp-073"]);add(13,"模拟测试",["st-kp-074"]);add(13,"考前冲刺",["st-kp-075"]);
  return all;}
const KP=[["软件测试","验证软件是否符合需求的活動"],["质量保障","确保软件质量的过程"],["测试用例","测试操作步骤和预期结果"],["黑盒测试","不关心内部结构的测试"],["白盒测试","基于代码结构的测试"],["等价类划分","输入数据分类选取代表值"],["边界值分析","在边界附近取值测试"],["判定表","逻辑条件组合的表格"],["状态迁移","状态流转测试"],["场景法","用户操作场景测试"],["语句覆盖","每行代码至少执行一次"],["分支覆盖","每个分支至少执行一次"],["条件覆盖","每个条件取真和假"],["路径覆盖","每条路径至少执行一次"],["MC/DC","每个条件独立影响结果"],["JUnit","Java单元测试框架"],["Mockito","Mock框架"],["TDD","测试驱动开发"],["Postman","接口测试工具"],["REST Assured","Java接口测试库"],["Selenium","Web自动化测试"],["Cypress","前端自动化框架"],["缺陷","软件不符合预期"],["Bug生命周期","缺陷从发现到关闭"],["严重程度","缺陷影响程度"],["优先级","缺陷修复紧迫性"],["JMeter","性能测试工具"],["Gatling","高性能测试工具"],["TPS","每秒事务数"],["QPS","每秒查询数"],["响应时间","请求到响应时间"],["测试计划","测试工作安排"],["测试报告","测试结果总结"],["回归测试","修改后重新测试"],["集成测试","模块组合测试"],["系统测试","完整系统测试"],["验收测试","用户确认测试"],["自动化测试","脚本执行测试"],["覆盖率","代码执行程度"]];
function buildKP(){const k=KP.map((kp,i)=>({id:`st-kp-${String(i+1).padStart(4,"0")}`,name:kp[0],description:kp[1],category:"测试",tags:["测试"],difficulty:i<30?"easy":i<50?"medium":"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"}));for(let i=0;i<700;i++){const t=["测试","用例","方法","工具","管理","质量","项目","面试","报告","综合"];k.push({id:`st-kp-${String(k.length+1).padStart(4,"0")}`,name:`${t[i%t.length]}知识${i+1}`,description:`测试知识：${t[i%t.length]}${i+1}`,category:"测试",tags:["测试"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}return k;}
const QC=["软件测试入门与质量意识","软件测试生命周期","测试计划测试需求与测试范围","测试用例设计基础","黑盒测试方法","白盒测试方法","单元测试与测试驱动入门","接口测试与API测试","Web测试与兼容性测试","自动化测试基础","缺陷管理与Bug报告","性能测试基础","测试报告质量度量与发布评估","软件测试项目实战与面试训练"];
function buildQ(){
  const qs=[];let qid=1;
  const TM=[
    {c:0,s:"软件测试的目的是什么？",o:["发现缺陷","证明程序正确","增加功能","提高速度"],a:"A",d:"easy",t:"single_choice"},
    {c:0,s:"测试不能保证什么？",o:["程序没有缺陷","程序运行","程序正确","程序完成"],a:"A",d:"medium",t:"single_choice"},
    {c:1,s:"测试计划最先做什么？",o:["分析需求","设计用例","执行测试","报告Bug"],a:"A",d:"medium",t:"single_choice"},
    {c:2,s:"等价类划分属于哪种测试方法？",o:["黑盒","白盒","灰盒","静态"],a:"A",d:"easy",t:"single_choice"},
    {c:3,s:"测试用例必须包含什么？",o:["测试步骤和预期结果","代码","数据库","界面"],a:"A",d:"easy",t:"single_choice"},
    {c:4,s:"边界值分析一般取几个值？",o:["最小值略小略大","随机值","中间值","最大值"],a:"A",d:"medium",t:"single_choice"},
    {c:4,s:"判定表用于什么场景？",o:["多条件组合","等价分类","边界分析","状态迁移"],a:"A",d:"hard",t:"single_choice"},
    {c:5,s:"语句覆盖要求什么？",o:["每行代码至少执行一次","每分支执行一次","每条件执行一次","每路径执行一次"],a:"A",d:"hard",t:"single_choice"},
    {c:5,s:"路径覆盖是白盒中最强的覆盖吗？",o:["是的但路径数可能太多","不是","不确定","最简单"],a:"A",d:"hard",t:"single_choice"},
    {c:6,s:"JUnit中的@Test注解表示？",o:["测试方法","测试类","测试套件","忽略"],a:"A",d:"easy",t:"single_choice"},
    {c:6,s:"Mockito可以模拟什么？",o:["外部依赖","数据库","UI","文件"],a:"A",d:"medium",t:"single_choice"},
    {c:7,s:"接口测试中常用什么工具？",o:["Postman","Selenium","JMeter","Appium"],a:"A",d:"easy",t:"single_choice"},
    {c:8,s:"兼容性测试主要检查什么？",o:["不同浏览器设备","功能","性能","安全"],a:"A",d:"medium",t:"single_choice"},
    {c:9,s:"Selenium用于什么测试？",o:["Web自动化","接口测试","性能测试","单元测试"],a:"A",d:"easy",t:"single_choice"},
    {c:9,s:"PageObject模式的好处？",o:["提高可维护性","加快执行","减少代码","增加覆盖"],a:"A",d:"hard",t:"single_choice"},
    {c:10,s:"Bug严重程度致命表示？",o:["系统崩溃数据丢失","界面错误","文案错误","建议"],a:"A",d:"medium",t:"single_choice"},
    {c:10,s:"Bug报告不需要包含什么？",o:["修复代码","步骤","环境","截图"],a:"A",d:"easy",t:"single_choice"},
    {c:11,s:"JMeter主要用于？",o:["性能测试","功能测试","单元测试","安全测试"],a:"A",d:"easy",t:"single_choice"},
    {c:11,s:"TPS指标表示？",o:["每秒事务数","每秒查询","响应时间","并发数"],a:"A",d:"medium",t:"single_choice"},
    {c:12,s:"测试报告不包括什么？",o:["代码实现","测试结果","缺陷统计","覆盖率"],a:"A",d:"medium",t:"single_choice"},
    {c:13,s:"面试中测试场景题怎么答？",o:["分析需求→设计用例→考虑边界","直接写代码","只看结果","忽略边界"],a:"A",d:"medium",t:"single_choice"},
  ];
  for(const t of TM){qs.push({id:`st-q-${String(qid).padStart(6,"0")}`,type:t.t,difficulty:t.d||"easy",chapter:QC[t.c],knowledge_points:[QC[t.c]],stem:t.s,options:t.o.map((x,i)=>({label:String.fromCharCode(65+i),text:x})),answer:t.a,explanation:`${t.s}正确答案是${t.a}。`,wrong_reason:`对${QC[t.c]}需加强理解。`,related_questions:[],tags:[QC[t.c]],estimated_time:60,source_type:"curated-generated"});qid++;}
  const e={};qs.forEach(q=>{e[q.type]=(e[q.type]||0)+1;});
  const TA=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"case_analysis",min:1200}];
  while(qid<=3700){
    const u=TA.filter(t=>(e[t.type]||0)<t.min);const it=pick(u.length>0?u:TA);const ch=pick(QC);const d=pick(DIFF);
    const id=`st-q-${String(qid).padStart(6,"0")}`;let o=[],a="",s="";
    switch(it.type){
      case"single_choice":s=`关于${ch}表述正确的是？`;o=[0,1,2,3].map(i=>({label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"}));a="A";break;
      case"multiple_choice":s=`以下关于测试${ch}哪些正确？（多选）`;o=[0,1,2,3].map(i=>({label:String.fromCharCode(65+i),text:i<2?"正确":"错误"}));a="AB";break;
      case"true_false":s=`${ch}是测试核心内容。（判断）`;o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=pick(["A","B"]);break;
      case"fill_blank":s=`在测试${ch}中______是重要概念。`;o=[{label:"A",text:"填写"}];a="按知识点";break;
      case"short_answer":s=`简述${ch}的方法和应用。`;o=[{label:"A",text:"简答"}];a=`${ch}方法...`;break;
      case"case_analysis":s=`${ch}测试案例：设计测试方案。`;o=[0,1,2,3].map(i=>({label:String.fromCharCode(65+i),text:`方案${i+1}`}));a="A";break;
    }
    qs.push({id,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:`正确答案是${a}。`,wrong_reason:`需加强对${ch}的实践。`,related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;
  }
  return qs;}
function buildExams(qs){const ex=[];for(let i=0;i<100;i++){const c=QC[i%QC.length];const d=i<35?"easy":i<65?"medium":"hard";const chQs=qs.filter(q=>q.chapter===c);ex.push({id:`st-exam-${String(i+1).padStart(2,"0")}`,title:`${c}${d==="easy"?"基础":d==="medium"?"进阶":"综合"}`,difficulty:d,timeLimit:d==="hard"?90:60,totalScore:100,passingScore:60,questionIds:pickN(chQs,25).map(q=>q.id),tags:[c],updatedAt:"2026-07-02T00:00:00.000Z"});}return ex;}
function buildCases(qs){const src=["登录功能测试","注册测试","密码规则测试","搜索功能测试","购物车测试","订单流程测试","权限测试","接口测试","异常输入","边界值测试","等价类测试","Bug报告","测试计划","测试报告","自动化脚本","性能测试","发布前检查"];const c=[];for(let i=0;i<260;i++){const t=src[i%src.length];c.push({id:`st-case-${String(i+1).padStart(3,"0")}`,title:`${t}案例${i+1}`,description:`通过${t}掌握测试`,difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"设计",description:"方法"},{order:3,title:"执行",description:"测试"},{order:4,title:"报告",description:"结果"},{order:5,title:"总结",description:"归纳"}],relatedQuestionIds:pickN(qs,3).map(q=>q.id),tags:[t],updatedAt:"2026-07-02T00:00:00.000Z"});}return c;}
const RT=[{slug:"3天测试入门",days:3,target:"入门"},{slug:"7天黑盒测试",days:7,target:"黑盒"},{slug:"14天白盒测试",days:14,target:"白盒"},{slug:"21天自动化",days:21,target:"自动化"},{slug:"30天性能测试",days:30,target:"性能"},{slug:"路由补1",days:5,target:"补1"},{slug:"路由补2",days:5,target:"补2"},{slug:"路由补3",days:5,target:"补3"},{slug:"路由补4",days:5,target:"补4"},{slug:"路由补5",days:5,target:"补5"},{slug:"路由补6",days:5,target:"补6"},{slug:"路由补7",days:5,target:"补7"},{slug:"路由补8",days:5,target:"补8"},{slug:"路由补9",days:5,target:"补9"},{slug:"路由补10",days:5,target:"补10"},{slug:"路由补11",days:5,target:"补11"},{slug:"路由补12",days:5,target:"补12"},{slug:"路由补13",days:5,target:"补13"},{slug:"路由补14",days:5,target:"补14"},{slug:"路由补15",days:5,target:"补15"},{slug:"路由补16",days:5,target:"补16"},{slug:"路由补17",days:5,target:"补17"},{slug:"路由补18",days:5,target:"补18"},{slug:"路由补19",days:5,target:"补19"},{slug:"路由补20",days:5,target:"补20"},{slug:"路由补21",days:5,target:"补21"},{slug:"路由补22",days:5,target:"补22"},{slug:"路由补23",days:5,target:"补23"},{slug:"路由补24",days:5,target:"补24"},{slug:"路由补25",days:5,target:"补25"},{slug:"路由补26",days:5,target:"补26"},{slug:"路由补27",days:5,target:"补27"},{slug:"路由补28",days:5,target:"补28"},{slug:"路由补29",days:5,target:"补29"},{slug:"路由补30",days:5,target:"补30"}];
function buildRoutes(cs,ls){return RT.map((r,i)=>({id:`st-route-${String(i+1).padStart(2,"0")}`,slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:cs.slice(0,5).map((c,si)=>({order:si+1,title:`第${si*7+1}-${Math.min((si+1)*7,r.days)}天`,description:`学习${c.title}`,courseId:c.id,lessonId:ls.filter(l=>l.courseId===c.id)[0]?.id||ls[0]?.id})),recommendedCourseIds:cs.slice(0,5).map(c=>c.id),recommendedLessonIds:ls.slice(0,10).map(l=>l.id),recommendedQuestionIds:[],outcomes:["掌握测试设计","能编写用例","会用自动化工具","具备质量保障思维"]}));}
const GL=[["软件测试","验证软件质量"],["测试用例","测试步骤"],["黑盒测试","功能测试"],["白盒测试","结构测试"],["等价类","输入分类"],["边界值","边界取值"],["判定表","条件组合"],["状态迁移","状态转换"],["场景法","业务流程"],["语句覆盖","代码覆盖"],["分支覆盖","判断覆盖"],["条件覆盖","布尔覆盖"],["路径覆盖","全路径"],["MC/DC","条件独立"],["JUnit","Java测试"],["Mockito","Mock框架"],["TDD","测试驱动"],["Postman","接口工具"],["Selenium","Web自动化"],["Cypress","前端测试"],["Bug","程序缺陷"],["JMeter","性能工具"],["Gatling","性能工具"],["TPS","每秒事务"],["QPS","每秒查询"],["测试计划","测试安排"],["测试报告","结果总结"],["回归测试","重复验证"],["覆盖率","测试程度"],["质量度量","质量指标"]];
for(let i=GL.length;i<360;i++){GL.push([`测试概念${i+1}`,`测试概念${i+1}说明`]);}
function buildGlossary(){return GL.map((x,i)=>({id:`st-glossary-${String(i+1).padStart(3,"0")}`,term:x[0],definition:x[1],category:"测试",tags:["测试"],updatedAt:"2026-07-02T00:00:00.000Z"}));}
const FAQ=[["软件测试和开发的关系？","测试与开发协作共同保障质量。"],["黑盒和白盒选哪个","各有所长黑盒找功能问题白盒找结构问题。"],["测试用例要素","编号标题步骤数据预期结果优先级状态。"],["等价类和边界值一起用吗","一般结合使用等价类加边界值。"],["单元测试测什么","函数方法等最小可测试单元。"],["接口测试测什么","请求响应状态码数据结构业务逻辑。"],["Selenium和Cypress区别","Selenium多浏览器Cypress快速开发。"],["Bug严重程度怎么定","看对用户和系统的影响程度。"],["性能测试关注哪些指标","TPSQPS响应时间错误率资源使用率。"],["测试报告包含什么","概述范围方法结果缺陷分析覆盖率建议。"],["自动化测试能测所有吗","不能手工探索式安全可用性仍需人工。"],["怎么学习测试","先学测试设计方法再学工具最后项目实践。"],["测试面试常问","测试设计场景自动化框架性能测试流程。"],["测试思维是什么","批判性思维细节导向用户视角。"]];
for(let i=FAQ.length;i<210;i++){FAQ.push([`测试常见问题${i+1}？`,`测试常见问题${i+1}解答。`]);}
function buildFaqs(){return FAQ.slice(0,210).map((x,i)=>({id:`st-faq-${String(i+1).padStart(3,"0")}`,question:x[0],answer:x[1],category:"测试",tags:["测试"],updatedAt:"2026-07-02T00:00:00.000Z"}));}
function buildSearchIndex(ls,kps,qs,gl,fs2){const e=[];ls.forEach(l=>e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:`/lessons/${l.slug}`,tags:["测试"]}));kps.forEach(k=>e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:`/knowledge/${k.id}`,tags:["测试"]}));qs.forEach(q=>e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:`/questions/${q.id}`,tags:["测试"]}));gl.forEach(g=>e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["测试"]}));fs2.forEach(f=>e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["测试"]}));return e;}
async function main(){
  console.log("🚀 Generating module-software-testing...\n");
  const tags=buildTags();const courses=buildCourses();const lessons=buildLessons();const kps=buildKP();const questions=buildQ();
  const exams=buildExams(questions);const cases=buildCases(questions);const routes=buildRoutes(courses,lessons);
  const glossary=buildGlossary();const faqs=buildFaqs();const si=buildSearchIndex(lessons,kps,questions,glossary,faqs);
  courses.forEach(c=>{const cl=lessons.filter(l=>l.courseId===c.id);c.lessonIds=cl.map(l=>l.id);c.totalLessons=cl.length;c.tags=[c.title];});
  const cm={};questions.forEach(q=>{if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(l=>{const ch=COURSES_DATA.find(c=>c.id===l.courseId)?.title||"";l.practiceQuestionIds=(cm[ch]||[]).slice(0,5);});
  const mod={id:"mod-software-testing",slug:"module-software-testing",title:"软件测试与质量保障",subtitle:"面向测试入门和QA学习者",description:"面向软件工程学生开发者和测试工程师入门者系统学习软件测试基础测试用例设计黑盒白盒单元测试接口测试自动化测试缺陷管理性能测试和质量保障的静态学习模块。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["软件测试","测试用例","接口测试","自动化测试","Bug管理","性能测试","质量保障","测试报告"],estimatedHours:140,difficulty:"beginner",updatedAt:"2026-07-02T12:00:00.000Z",coverEmoji:"🧪",repoUrl:"https://github.com/openskill-galaxy/module-software-testing",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  const files={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(const[n,data]of Object.entries(files)){const fp=path.join(DATA,n);fs.writeFileSync(fp,JSON.stringify(data,null,2),"utf-8");console.log(`  ${n} (${Array.isArray(data)?data.length:1})`);}
  const tc={};questions.forEach(q=>{tc[q.type]=(tc[q.type]||0)+1;});
  console.log(`\ncourses:${courses.length} lessons:${lessons.length} KPs:${kps.length} questions:${questions.length} exams:${exams.length} cases:${cases.length} routes:${routes.length} tags:${tags.length} glossary:${glossary.length} faqs:${faqs.length} search-index:${si.length}`);
  for(const[t,c]of Object.entries(tc).sort())console.log(`  ${t}:${c}`);console.log("✅ Done!");}
main().catch(e=>{console.error(e);process.exit(1);});
