import React from 'react'

function NavSidebar({ handleNavClick, projects, activeComponent } ) {

  const navItems = [
    { name: "Explore", icon: "/images/team_dashboard.svg", component: "Explore" },
    { name: "My Contributions", icon: "/images/team_dashboard.svg", component: "My Contributions" },
    { name: "Published Projects", icon: "/images/team_dashboard.svg", component: "Published Projects" },
    { name: "My Profile", icon: "/images/team_dashboard.svg", component: "My Profile" }
  ]  

  return (
    <div className='flex flex-col items-center bg-[#F6F6F6] px-8 py-10 gap-[74px] w-[270px] h-screen fixed top-0 left-0'>
      <div>
        <img src="/images/DesignForge.svg" alt="logo" />
      </div>
      
      <div className="flex flex-col gap-4">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(item.component)}
            className={`flex items-center gap-2 p-2 rounded-md ${activeComponent === item.component ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
          >
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </button>
        ))}
      </div>    
    </div>
  )
}

export default NavSidebar
