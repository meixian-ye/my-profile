export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              <div className="text-lg text-gray-600 mb-2 px-16 font-normal">Hey, I'm</div>
              <h1 className="mb-6 leading-tight text-5xl text-slate-600 px-16 font-normal">叶梅仙</h1>
              <p className="text-gray-600 mb-4 leading-relaxed text-base px-16 font-light">
                Data&AI产品经理 @ Thoughtworks
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-base px-16 font-light">
                学院中的电子商务狗，云里雾里当上了产品狗
              </p>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 px-16 mt-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    感性的射手座
                  </span>
                  <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
                    口如悬河的ENTP
                  </span>
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    种菜血脉觉醒者
                  </span>
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    暴躁的小学生饲养员
                  </span>
                  <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                    挖野菜爱好者
                  </span>
                  <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                    不协调的舞蹈初学者
                  </span>
                  <span className="bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-xs font-medium">
                    间歇性运动爱好者
                  </span>
                  <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                    生娃劝导员
                  </span>
                  <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-medium">
                    追剧小达人
                  </span>
                  <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium">
                    数据产品培训师
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                    AI项目实战者
                  </span>
                  <span className="bg-violet-50 text-violet-700 px-3 py-1 rounded-full text-xs font-medium">
                    阿里大模型ACP认证
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="flex justify-center lg:justify-center lg:-ml-20">
              <div className="rounded-full overflow-hidden shadow-2xl border-2 leading-7 opacity-90 px-0 h-[360px] w-[360px]">
                <img src="/images/profile.jpg" alt="叶梅仙 profile photo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 relative overflow-hidden leading-7 py-3.5">
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          {/* Background text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <span className="text-9xl font-black text-gray-400 tracking-wider">PROJECTS</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-20">
            <div className="stat-item">
              <h3 className="text-3xl font-thin mb-2.5 text-slate-700">11+</h3>
              <p className="text-sm text-gray-600 font-medium tracking-wide">B端产品经理</p>
            </div>
            <div className="stat-item">
              <h3 className="text-gray-900 text-3xl font-thin mb-2.5">6+</h3>
              <p className="text-sm text-gray-600 font-medium tracking-wide">数据产品经理</p>
            </div>
            <div className="stat-item">
              <h3 className="text-gray-900 text-3xl font-thin mb-2.5">ing</h3>
              <p className="text-sm text-gray-600 font-medium tracking-wide">AI产品经理</p>
            </div>
            <div className="stat-item">
              <h3 className="text-gray-900 text-3xl font-thin mb-2.5">20+</h3>
              <p className="text-sm text-gray-600 font-medium tracking-wide">累计项目</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-2.5">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-normal text-gray-800 text-center mb-15 py-3.5">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* First card - 放下书本 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg relative min-h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('/images/colorful-canal.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
              <div className="relative z-10 p-5 h-full flex flex-col justify-center text-white">
                <h4 className="text-base font-medium mb-3 leading-relaxed text-white">工作中的我</h4>
                <ul className="list-none p-0 m-0 space-y-2">
                  <li className="font-light leading-relaxed text-white text-xs">
                    车企、零售、医药领域中，埋头方案设计和实施规划；
                  </li>
                  <li className="font-light leading-relaxed text-xs leading-7">客户会上、开发堆里喋喋不休；</li>
                  <li className="font-light leading-relaxed text-xs">企业战略、用户需求、数据分析乐此不疲；</li>
                </ul>
              </div>
            </div>

            {/* Second card - 人无完人 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg relative min-h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('/images/seashells-sand.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
              <div className="relative z-10 p-5 h-full flex flex-col justify-center text-white">
                <h4 className="text-base font-medium mb-3 leading-relaxed text-white">生活中的我</h4>
                <p className="text-xs font-light text-white/90 mb-3 leading-8">
                  间歇性自律和间歇性摆烂，例如刷刷剧、放弃身材管理，先摆烂的人先享受快乐 ；在书房中咆哮面对家中神兽；
                </p>
              </div>
            </div>

            {/* Third card - 人是铁，饭是钢 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg relative min-h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('/images/elegant-breakfast.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
              <div className="relative z-10 p-5 h-full flex flex-col justify-center text-white">
                <h4 className="text-base font-medium mb-3 leading-relaxed text-white leading-6">美食爱好</h4>
                <p className="text-xs mb-3 font-light text-white/90 leading-8">
                  不论菜系、不轮菜品，都不不不挑食..... 没有不好的食物，只有没灵魂的厨师
                </p>
              </div>
            </div>

            {/* Fourth card - 那是一个寒冷的冬天 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg relative min-h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('/images/winter-landscape.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
              <div className="relative z-10 p-5 h-full flex flex-col justify-center text-white">
                <h4 className="text-base font-medium mb-3 leading-relaxed text-white">骄傲&amp;糗事</h4>
                <p className="text-xs mb-3 font-light text-white/90 leading-7">
                  学骑自行车一周，就开启环青海湖骑行... 呛水后放弃了学游泳，从此成了教练微信里追不回的人...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="bg-gray-50 py-20 pb-32">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center relative z-10">
            <h2 className="font-normal leading-relaxed bg-gradient-to-r from-slate-700 via-gray-600 to-slate-800 bg-clip-text text-transparent mb-8 text-3xl">
              对2026年的自己说句话
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-gradient-to-b from-blue-400 to-purple-400 shadow-none">
              <span className="text-blue-600 font-medium">"Hi，</span>
              <span className="text-gray-700">一年后的我，你应该已经开始了</span>
              <span className="text-green-600 font-medium">养生之旅</span>
              <span className="text-gray-700">！"</span>
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
