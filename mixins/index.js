export default {
  data () {
    return {
      parentescos: [
        {
          name: 'Madre',
          description: 'Madre',
          value: 'madre'
        },
        {
          name: 'Padre',
          description: 'Padre',
          value: 'padre'
        },
        {
          name: 'Hermano(a)',
          description: 'Hermana/Hermano',
          value: 'hermano'
        },
        {
          name: 'Tío(a)',
          description: 'Tío/Tía',
          value: 'tio'
        },
        {
          name: 'Abuelo(a)',
          description: 'Abuela/Abuelo',
          value: 'abuelo'
        },
        {
          name: 'Otro Familiar',
          description: 'Otro Faminiar',
          value: 'familiar_indirecto'
        },
        // {
        //   name: 'Conocido',
        //   description: 'Conocido',
        //   value: 'conocido'
        // }
      ],
      posiciones: [
        { label: 'Portero', value: 1 },
        { label: 'Lateral Derecho', value: 2 },
        { label: 'Lateral Izquierdo', value: 3 },
        { label: 'Central Derecho', value: 4 },
        { label: 'Central Izquierdo', value: 5 },
        { label: 'Contención', value: 6 },
        { label: 'Extremo Derecho', value: 7 },
        { label: 'Volante Mixto', value: 8 },
        { label: 'Delantero', value: 9 },
        { label: 'Volante Ofensivo', value: 10 },
        { label: 'Extremo Izquierdo', value: 11 },
      ],
      socials: [
        {
          name: 'facebook',
          link: 'https://www.facebook.com/profile.php?id=61559794180117',
          icon: 'https://braingoat-container.s3.amazonaws.com/assets/globales/social-media/facebook/icon_facebook_blanco.svg'
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/giganterachivas?igsh=MWZsZndxcTkxNXYzdQ==',
          icon: 'https://braingoat-container.s3.amazonaws.com/assets/globales/social-media/instagram/icon_instagram_blanco.svg'
        },
        // {
        //   name: 'twiiter',
        //   link: 'http://bit.ly/41jKWk3',
        //   icon: 'https://braingoat-container.s3.amazonaws.com/assets/globales/social-media/twitter/icon_twitter_x_blanco.svg'
        // },
        // {
        //   name: 'youtube',
        //   link: 'http://bit.ly/3GipmUC',
        //   icon: 'https://braingoat-container.s3.amazonaws.com/assets/globales/social-media/youtube/icon_youtube_blanco.svg'
        // },
        // {
        //   name: 'tiktok',
        //   link: 'http://bit.ly/3KBbnfy',
        //   icon: 'https://braingoat-container.s3.amazonaws.com/assets/globales/social-media/tiktok/icon_tiktok_blanco.svg',
        //   width: 'w-20'
        // },
        // {
        //   name: 'linkedin',
        //   link: 'http://bit.ly/3KayxYz',
        //   icon: 'https://braingoat-container.s3.amazonaws.com/assets/globales/social-media/linkedin/icon_linkedin_blanco.svg'
        // },
        // {
        //   name: 'discord',
        //   link: 'http://bit.ly/41kLWFi',
        //   icon: 'https://braingoat-container.s3.amazonaws.com/assets/globales/social-media/discord/icon_discord_blanco.svg'
        // }
        // {
        //   name: 'telegram',
        //   link: 'http://bit.ly/437avpT',
        //   icon: ''
        // }
      ]
    }
  },
  computed: {
    parents () {
      return this.parentescos.map((p) => {
        return {
          value: p.value,
          label: p.name.toUpperCase()
        }
      })
    },
  },
  methods: {
    checkParentesco(value) {
      // console.log(value)
      // this.request.parentesco = value
      this.request.detalle_parentesco = value === 'familiar_indirecto' ? '' : value
      this.$forceUpdate()
    }
  },
}
