class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
          <!-- Footer -->
  <footer class="page-footer font-small blue pt-4 mt-20">
  
    <!-- Footer Links -->
    <div class="flex flex-col ml-5 md:flex-row w-20 md:text-center md:mt-20 md:hidden">
      <div>
        <a class="w-10 text-white text-left" href="#">
          <svg width="24" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="4" stroke="#FEFEFE" stroke-width="1.5"/>
          <circle cx="18" cy="6" r="1" fill="#FEFEFE"/>
          <circle cx="12" cy="12" r="5" stroke="#FEFEFE" stroke-width="1.5"/>
          </svg>
        </a>
      </div>

      <div>
        <a href="#">
          <svg width="20" height="35" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 2.5H13.3333C10.5719 2.5 8.33333 4.73858 8.33333 7.5V8.33333H5V11.6667H8.33333V17.5H11.6667V11.6667H15V8.33333H11.6667V6.83333C11.6667 6.28105 12.1144 5.83333 12.6667 5.83333H15V2.5Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <div class>
      <a href="#">
        <svg width="20" height="35" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.66667" y="2.5" width="16.6667" height="15" rx="4" stroke="#FEFEFE" stroke-width="1.5"/>
        <path d="M8.94721 7.39035L12.3778 9.10565C13.1149 9.47418 13.1149 10.526 12.3778 10.8945L8.94721 12.6098C8.28231 12.9423 7.5 12.4588 7.5 11.7154V8.28478C7.5 7.5414 8.28231 7.0579 8.94721 7.39035Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </a>
      </div>
    </div>

    <div class="flex flex-col text-right text-white font-light mr-[100px] relative -top-[103px] md:mt-[120px] md:text-center">
      <h1 class="text-2xl md:text-3xl">Development by</h1>
      <a class="text-2xl md:text-3xl font-bold mr-3 w-50" href="https://github.com/ctorresCode">crtorrescode</a>
      <p class="text-[13px] md:text-3xl mt-2 -mr-10">Copyright © 2024 3legant. All rights reserved</p>
    </div> 
    
    <div class="flex justify-center hidden md:inline-flex md:-mt-[100px] md:mr-[90px] p-6">
       <a class="w-10 text-white" href="#">
          <svg width="40" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="4" stroke="#FEFEFE" stroke-width="1.5"/>
          <circle cx="18" cy="6" r="1" fill="#FEFEFE"/>
          <circle cx="12" cy="12" r="5" stroke="#FEFEFE" stroke-width="1.5"/>
          </svg>
        </a>

        <a href="#">
          <svg width="40" height="35" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 2.5H13.3333C10.5719 2.5 8.33333 4.73858 8.33333 7.5V8.33333H5V11.6667H8.33333V17.5H11.6667V11.6667H15V8.33333H11.6667V6.83333C11.6667 6.28105 12.1144 5.83333 12.6667 5.83333H15V2.5Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <a href="#">
        <svg width="40" height="35" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.66667" y="2.5" width="16.6667" height="15" rx="4" stroke="#FEFEFE" stroke-width="1.5"/>
        <path d="M8.94721 7.39035L12.3778 9.10565C13.1149 9.47418 13.1149 10.526 12.3778 10.8945L8.94721 12.6098C8.28231 12.9423 7.5 12.4588 7.5 11.7154V8.28478C7.5 7.5414 8.28231 7.0579 8.94721 7.39035Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </a>
    </div>
  
  </footer>
  <!-- Footer -->
  
        `
      
    }
  }

  customElements.define('main-footer', Footer);