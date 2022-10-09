import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
   <img src={"/images/logo.jpg"} width="50" height="50" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/farmer">Farmer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/supplier">Supplier</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"href="#">Advertisment</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
