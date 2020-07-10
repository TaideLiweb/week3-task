var app = new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1,
        imageUrl: [`https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_960_720.jpg`],
        title: '聖誕老人蠟燭',
        category: '其他造型',
        description: ``,
        content: `12月，最歡樂的月份來了！聖誕老人蠟燭`,
        origin_price: 500,
        price: 450,
        unit: '',
        enabled: true,
      },
      {
        id: 2,
        imageUrl: [`https://cdn.pixabay.com/photo/2019/02/25/19/22/brownie-4020342_960_720.jpg`],
        title: '香氛蠟燭',
        category: '食物系列',
        description: ``,
        content: `12月，最歡樂的月份來了！聖誕老人蠟燭`,
        origin_price: 500,
        price: 450,
        unit: '',
        enabled: true,
      },
    ],
    template: {},
  },
  methods: {
    openModal() {
      this.template = {}
      $('#modal').modal('show')
    },
    openEditModal(item) {
      this.template = Object.assign({}, item)
      $('#modal').modal('show')
    },
    openRemoveModal(item, id) {
      $('#deleteModal').modal('show')
      this.template = Object.assign({}, item)
      // this.products.forEach((item, index) => {
      //   if (item.id === id) {
      //     this.products.splice(index, 1)
      //   }
      // })
    },
    removeData(template) {
      let key
      this.products.forEach((item, index) => {
        if (item.id === template.id) {
          key = index
        }
      })
      this.products.splice(key, 1)
      $('#deleteModal').modal('hide')
    },

    updateData() {
      if (this.template.id) {
        let key
        this.products.forEach((item, index) => {
          if (this.template.id === item.id) {
            key = index
          }
        })
        this.products.splice(key, this.template)
        this.$set(this.products, key, this.template)
        $('#modal').modal('hide')
        this.template = {}
      } else {
        const time = new Date().getTime()
        this.template.enabled = true
        this.template.id = time
        this.products.push(this.template)
        console.log(this.products)
        $('#modal').modal('hide')
        this.template = {}
      }
    },
    cancel() {
      $('#modal').modal('hide')
      $('#deleteModal').modal('hide')
    },
  },
})
