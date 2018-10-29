import blog from '@/api/blog';
export default {
  data () {
    return {
      blogs: [],
      user: {},
      page: 1,
      total: 0
    }
  },
  created(){
    this.userId = this.$route.params.userId
    this.page = this.$route.query.page || 1
    blog.getBlogByUserId(this.userId,{page: this.page}).then((res)=>{
      console.log(res)
      this.blogs = res.data
      this.page = res.page
      this.total = res.total
      if(res.data.length > 0){
        this.user = res.data[0].user
      }
    })
  },
  methods: {
    splitDate(dataStr){
      let dateObj = typeof dataStr === 'object' ? dataStr: new Date(dataStr)
      
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },
    onPageChange(newPage){
      blog.getBlogByUserId(this.userId,{page: newPage}).then((res)=>{
       this.blogs = res.data
       this.total = res.total
       this.page = res.page
       this.$router.push({path: `/user/${this.userId}`, query:{page: newPage}})
     })
   }
  }
}