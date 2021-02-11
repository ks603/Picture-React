import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
        Authorization: 'Client-ID DyGYnjj_j4phxm0r6awddZvAv-8orhkHPpDj8yP5z6o',
      }
})