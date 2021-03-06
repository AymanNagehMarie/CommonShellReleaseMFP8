window.DashboardConfig = {
		tiles:[
			{
		    	name:"driverTile",
		    	displayNameAr:getServiceObjectById(1).TileNameAr,
		    	displayNameEn:getServiceObjectById(1).TileNameEn,
		    	order:0,
		    	enabled:true,
		    	sortable:true
		    },
		    {
		    	name:"vehicleTile",
		    	displayNameAr:getServiceObjectById(2).TileNameAr,
		    	displayNameEn:getServiceObjectById(2).TileNameEn,
		    	order:1,
		    	enabled:true,
		    	sortable:true
		    },
		    {
		    	name:"finesTile",
		    	displayNameAr:getServiceObjectById(5).TileNameAr,
		    	displayNameEn:getServiceObjectById(5).TileNameEn,
		    	order:2,
		    	enabled:true,
		    	sortable:true
		    },
		    {
		    	name:"parkingTile",
		    	displayNameAr:getServiceObjectById(7).TileNameAr,
		    	displayNameEn:getServiceObjectById(7).TileNameEn,
		    	order:3,
		    	enabled:true,
		    	sortable:true
		    },
		    {
		    	name:"salikTile",
		    	displayNameAr:getServiceObjectById(8).TileNameAr,
		    	displayNameEn:getServiceObjectById(8).TileNameEn,
		    	order:4,
		    	enabled:true,
		    	sortable:true
		    },
		    {
		    	name:"myDocsTile",
		    	displayNameAr:"وثائقي",
		    	displayNameEn:"My Docs",
		    	order:5,
		    	enabled:true,
		    	sortable:true
		    },
		    {
		    	name:"driveModeTile",
		    	displayNameAr:null,
		    	displayNameEn:null,
		    	order:6,
		    	enabled:true,
		    	sortable:false
		    },
		    {
		    	name:"platesTile",
		    	displayNameAr:getServiceObjectById(4).TileNameAr,
		    	displayNameEn:getServiceObjectById(4).TileNameEn,
		    	order:7,
		    	enabled:true,
		    	sortable:true
		    },
		    {
		    	name:"docsTile",
		    	displayNameAr:getServiceObjectById(6).TileNameAr,
		    	displayNameEn:getServiceObjectById(6).TileNameEn,
		    	order:8,
		    	enabled:true,
		    	sortable:true
		    }
		],
		sliderTemplates:{
			// left:{
			// 	template:"licensesItem",
			// 	controller:"loadDriverLicenseTile"
			// },
			right:{
				template:"greenpointItem",
				controller:"loadGreenPointsTile"
			}
		}
}