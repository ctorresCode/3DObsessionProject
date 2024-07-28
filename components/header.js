document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIconOpen = mobileMenuButton.querySelector('svg:first-of-type');
    const mobileMenuIconClose = mobileMenuButton.querySelector('svg:last-of-type');
    
    mobileMenuButton.addEventListener('click', function () {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        
        if (isExpanded) {
        // Close the menu
        mobileMenu.classList.add('hidden');
        mobileMenuIconOpen.classList.remove('hidden');
        mobileMenuIconClose.classList.add('hidden');
        } else {
        // Open the menu
        mobileMenu.classList.remove('hidden');
        mobileMenuIconOpen.classList.add('hidden');
        mobileMenuIconClose.classList.remove('hidden');
        }
    });
});

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
            <nav class="bg-[#50B498] shadow-md shadow-gray-400">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-24 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
        <span class="justify-end pr-3 mt-1 text-xl font-bold">3D Obsession</span>
        <div class="hidden sm:ml-6 sm:block md:ml-[550px]">
          <div class="flex space-x-14">
            <!-- Current: "bg-gray-900 text-white", Default: "text-white hover:bg-gray-700 hover:text-white" -->
            <a href="index.html" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Home</a>
            <a href="humanresources.html" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Human Resources</a>
            <a href="projectmanagement.html" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Project Management</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <!-- Profile dropdown -->
        <div class="relative ml-3">
          <div>
            <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <a href="index.html" class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Home</a>
      <a href="humanresources.html" class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Human Resources</a>
      <a href="projectmanagement.html" class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Project Management</a>
    </div>
  </div>
</nav>
          `
    }
  }
  customElements.define('main-header', Header);  