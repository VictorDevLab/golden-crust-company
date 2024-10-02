import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SearchOrder() {
const [query, setQuery] = useState("")

const navigate = useNavigate()

function handleSubmit(e) {
 e.preventDefault()
 if(!query) return
  navigate(`/order/${query}`)
  setQuery("")
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input value={query} placeholder="Search your order #" onChange={(e) => setQuery(e.target.value)} />
        </form>
    </div>
  )
}

export default SearchOrder