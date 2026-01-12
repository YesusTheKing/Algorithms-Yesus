The Scenario: "The Automated Software Architect"
You are building an automated build system for a massive software project. The project is broken down into 12 distinct modules. Some modules can be built immediately, but others require certain modules to be compiled and ready before they can start.

The Dependency Rules:
Your system receives the following list of requirements (Dependencies):

UI_Theme depends on Core_Styles.

Database_Driver depends on OS_Kernel_Hooks.

User_Dashboard depends on UI_Theme and API_Client.

API_Client depends on Network_Layer.

Network_Layer depends on OS_Kernel_Hooks.

Reporting_Tool depends on Database_Driver and API_Client.

Search_Engine depends on Database_Driver.

Main_App_Entry depends on User_Dashboard, Search_Engine, and Reporting_Tool.

Logging_Service has no dependencies.

OS_Kernel_Hooks depends on Logging_Service.

Core_Styles has no dependencies.

Analytics_Module depends on Reporting_Tool.

Your Goal:
Determine the exact order in which the build system must compile these 12 modules so that no module is ever started before its dependencies are finished.