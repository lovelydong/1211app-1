import HomePage from './pages/homes/home.vue';
import Recommended from './pages/recommended/recommended.vue';
import RecommendedParticulars from './pages/recommended/recommendedParticulars.vue';
import Search from './pages/homes/search.vue';
import News from './pages/homes/news.vue';
import SearchResult from './pages/homes/searchresult.vue';
import ExaminationAnalysis from './pages/examinationAnalysis/examinationAnalysis.vue';
import ExaminationParticulars from './pages/examinationAnalysis/examinationParticulars.vue';
import QuestionBank from './pages/questionBank/questionBank.vue';
import QuestionBankParticulars from './pages/questionBank/questionBankParticulars.vue';
import QuestionBankhome from './pages/questionBank/questionBankhome.vue';
import ModuleExam from './pages/questionBank/moduleExam.vue';
import MyGrade from './pages/questionBank/myGrade.vue';
import KPerformance from './pages/questionBank/Kperformance.vue';
import AnswerKeys from './pages/questionBank/AnswerKeys.vue';
import My from './pages/my/my.vue';
import WrongTopicHighlights from './pages/my/myWrongTopic/wrongTopicHighlights.vue';
import WrongTopicHighlightsParticulars from './pages/my/myWrongTopic/wrongTopicHighlightsParticulars.vue';
import Note from './pages/my/myNote/note.vue';
import NoteParticulars from './pages/my/myNote/noteParticulars.vue';
import ExaminationPaper from './pages/my/myTestPaper/examinationPaper.vue';
import ExaminationPaperParticulars from './pages/my/myTestPaper/examinationPaperParticulars.vue';
import MyCollect from './pages/my/myCollect/myCollect.vue';
import MyCollectParticulars from './pages/my/myCollect/myCollectParticulars.vue';
import MyCollectTopicParticulars from './pages/my/myCollect/myCollectTopicParticulars.vue';
import MyOrder from './pages/my/myOrder/myOrder.vue';
import CheckTheLogistics from './pages/my/myOrder/checkTheLogistics.vue';
import DiscountCoupon from './pages/my/discountCoupon/discountCoupon.vue';
import MyCourses from './pages/my/myCourses/myCourses.vue';
import WatchTheRecord from './pages/my/watchTheRecord/watchTheRecord.vue';
import ShoppingTrolley from './pages/my/shoppingTrolley/shoppingTrolley.vue';
import Indent from './pages/my/shoppingTrolley/indent.vue';
import MyAddress from './pages/my/shoppingTrolley/myAddress/myAddress.vue';
import NewAddress from './pages/my/shoppingTrolley/myAddress/newAddress.vue';
import SetSettingUpInstall from './pages/my/setSettingUpInstall/setSettingUpInstall.vue';
import PersonalData from './pages/my/setSettingUpInstall/personalData.vue';
import AboutUs from './pages/my/setSettingUpInstall/AboutUs.vue';
import ModificationName from './pages/my/setSettingUpInstall/modificationName.vue';
import Privacy from './pages/my/setSettingUpInstall/privacy.vue';
import ChangePassword from './pages/my/setSettingUpInstall/changePassword.vue';
import ChangeNumber from './pages/my/setSettingUpInstall/changeNumber.vue';
import coupleBack from './pages/my/setSettingUpInstall/coupleBack.vue';
import Issue from './pages/my/setSettingUpInstall/issue.vue';
import Login from './pages/login/login.vue';
import Register from './pages/login/register.vue';
import RetrievePassword from './pages/login/retrievePassword.vue';
import NLiveStreaming from './pages/homes/nLiveStreaming.vue';
import RecordedBroadcast from './pages/homes/recordedBroadcast.vue';
import Live from './pages/recommended/live.vue';

export default [{
        path: '/', //首页
        component: HomePage,
        //component: Login,
    }, {path: '/home', //首页
        component: HomePage,
        
    }, {
        path: '/recommended', //推荐课程
        component: Recommended,
    }, {
        path: '/nLiveStreaming', //直播
        component: NLiveStreaming,
    }, {
        path: '/recordedBroadcast', //录播
        component: RecordedBroadcast,
    }, {
        path: '/search', //搜索
        component: Search,
    },
    {
        path: '/news', //消息
        component: News,
    },
    {
        path: '/recommendedParticulars', //推荐课程详情
        component: RecommendedParticulars,
    },
    {
        path: '/examinationAnalysis', //考情分析
        component: ExaminationAnalysis,
    },
    {
        path: '/examinationParticulars', //考情分析详情页
        component: ExaminationParticulars,
    },
    {
        path: '/searchResult', //搜索详情页
        component: SearchResult,
    },
    {
        path: '/questionBankhome', //题库
        component: QuestionBankhome,
    },
    {
        path: '/moduleExam', //章节练习
        component: ModuleExam,
    },
    {
        path: '/questionBank', //推荐题库
        component: QuestionBank,
    },
    {
        path: '/questionBankParticulars', //推荐题库详情
        component: QuestionBankParticulars,
    },
    {
        path: '/myGrade', //自主评分
        component: MyGrade,
    },
    {
        path: '/Kperformance', //考试成绩
        component: KPerformance,
    },
    {
        path: '/AnswerKeys', //答案解析
        component: AnswerKeys,
    },
    {
        path: '/my', //我的
        component: My,
    },
    {
        path: '/wrongTopicHighlights', //我的错题
        component: WrongTopicHighlights,
    },
    {
        path: '/wrongTopicHighlightsParticulars', //我的错题详情页
        component: WrongTopicHighlightsParticulars,
    },
    {
        path: '/note', //我的笔记
        component: Note,
    },
    {
        path: '/noteParticulars', //我的笔记详情页
        component: NoteParticulars,
    },
    {
        path: '/examinationPaper', //我的试卷
        component: ExaminationPaper,
    },
    {
        path: '/examinationPaperParticulars', //我的试卷详情页
        component: ExaminationPaperParticulars,
    },
    {
        path: '/myCollect', //我的收藏
        component: MyCollect,
    },
    {
        path: '/myCollectParticulars', //试卷收藏
        component: MyCollectParticulars,
    },
    {
        path: '/myCollectTopicParticulars', //试题收藏
        component: MyCollectTopicParticulars,
    },
    {
        path: '/myOrder', //我的订单
        component: MyOrder,
    },
    {
        path: '/checkTheLogistics', //物流信息
        component: CheckTheLogistics,
    },
    {
        path: '/discountCoupon', //优惠券
        component: DiscountCoupon,
    },
    {
        path: '/myCourses', //我的课程
        component: MyCourses,
    },
    {
        path: '/watchTheRecord', //观看记录
        component: WatchTheRecord,
    },
    {
        path: '/shoppingTrolley', //购物车
        component: ShoppingTrolley,
    },
    {
        path: '/indent', //提交订单
        component: Indent,
    },
    {
        path: '/myAddress', //地址管理
        component: MyAddress,
    },
    {
        path: '/newAddress', //新增地址管理
        component: NewAddress,
    },
    {
        path: '/setSettingUpInstall', //设置
        component: SetSettingUpInstall,
    },
    {
        path: '/personalData', //个人资料
        component: PersonalData,
    },
    {
        path: '/AboutUs', //关于山香
        component: AboutUs,
    },
    {
        path: '/modificationName', //修改名称
        component: ModificationName,
    },
    {
        path: '/privacy', //账号与隐私
        component: Privacy,
    },
    {
        path: '/changePassword', //修改密码
        component: ChangePassword,
    },
    {
        path: '/changeNumber', //修改手机号
        component: ChangeNumber,
    },
    {
        path: '/coupleBack', //意见反馈
        component: coupleBack,
    },
    {
        path: '/issue', //常见问题
        component: Issue,
    },
    {
        path: '/login', //登录
        component: Login,
    },
    {
        path: '/register', //注册
        component: Register,
    },
    {
        path: '/retrievePassword', //找回密码
        component: RetrievePassword,
    },
    {
        path: '/live', //直播
        component: Live,
    },

]