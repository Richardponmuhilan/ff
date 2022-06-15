import { RAquestionaireComponent } from "../components/riskAssessment-questionnaire-component/riskAssessment-questionnaire.component";

export let apiURLS: {
  authenticateURL: string,
  permissionListURL: string,
  permissionUpdateURL: string,
  permissionEditURL: string,
  // permissionListEditURL: string,
  moduleListURL: string,
  sideMenuURL: string,
  threatListURL: string,
  riskActivitiesListURL: string,
  riskActivitiesAddEditURL: string,
  strategyListURL: string,
  strategyAddEditURL: string,
  riskEventsListURL: string,
  riskEventsAddEditURL: string,
  goalsListURL: string,
  kpiURL: string,
  goalsAddEditURL: string,
  pageLog: string,
  subEventsListURL: string,
  subEventsAddEditURL: string,
  losssEventURL: string,
  resourceAddEditURL: string,
  threatDeleteURL: string,
  assetListURL: string,
  assetAddEditURL: string,
  assetAddEdit_SWURL: string,
  assetAddEdit_BAURL: string,
  assetAddEdit_InfoURL: string,
  assetAddEdit_PeopleURL: string,
  assetAddEdit_Doc: string,
  assetAddEdit_BSURL: string,
  assetListDelteURL: string,
  vulerabilityListURL: string,
  cbaListURL: string,
  tvPairsListURL: string,
  tvPairsEditURL: string,
  industryStandardListURL: string,
  industryStandardAddEditURL: string,
  costBenefitAnalysisListURL: string,
  costBenefitAnalysisAddEditURL: string,
  tvPairsDeleteURL: string,
  arToAsset: string,
  aaToAsset: string,
  arToAssetEditURL: string,
  manageRole: string,
  deleteRole: string,
  manageUserListURL: string,
  manageUserAddEditURL: string,
  managUserLocationListURL: string,
  entityListURL: string,
  entityListDeleteURL: string,
  entityLAddEditURL: string,
  managAssetLocationURL: string,
  rtpListURL: string,
  threatEditURL: string,
  dashBoardUrl: string,
  assetGrpingListURL: string,
  assetGrpingAddEditURL: string,
  RM_controlIndentificationAddEdit: string,
  controlListURL: string,
  threatSaveURL: string,
  vulnerabilityDeletetURL: string,
  vulnerabilityEditURL: string,
  vulnerabilitySaveURL: string,
  fileUploadUrl: string,
  report_riskRegUrl: string,
  report_assetRegUrl: string,
  report_HWassetRegUrl: string,
  report_ProjectReportUrl: string,
  report_EntityDetailsUrl: string,
  report_ControlsUnAssociatedToRisksUrl: string,
  report_UnUsedControlsReportUrl: string,
  report_VulnerabilitieswithMissingThreatsUrl: string,
  report_ThreatsWithMissingVulnerabilitesUrl: string,
  report_RiskUnAssociatedToControlsUrl: string,
  report_UnUsedRisksReportUrl: string,
  report_AssetsNotMappedToControlsUrl: string,
  report_TopRisksRegisterUrl: string,
  report_AssetsAndUsersUrl: string,
  report_RTPUrl: string,
  report_SWassetRegUrl: string,
  report_InfoAssetUrl: string,
  report_BappAssetUrl: string,
  report_ControlDetailsReportUrl: string,
  report_TVControlModelUrl: string,
  report_TVMappingReportlUrl: string,
  report_DocRegUrl: string,
  report_AssetControlRiskMapping: string,
  valuationQuantitativeUrl: string,
  valuationQualitativeUrl: string,
  report_QuantitativeAssetValuationUrl: string,
  assetControl_Mapping: string,
  assetClassification: string,
  report_QualitativeAssetValuation: string,
  OrganisationStructureAddEdit: string,
  OrganisationStructureList: string,
  BusinessProcess: string,
  WorkFlow: string,
  BusinessProcessList: string,
  PolicyAddEdit: string,
  PolicyList: string,
  RMEventsAddEdit: string,
  RMEventsList: string,
  RMKRIList: string,
  RMProjectsList: string,
  RMProjectsAddEdit: string,
  SecurityMaturity: string,
  KRIaddEdit: string,
  TasksAddEdit: string,
  TasksList: string,
  PlayBookAddEditList: string,
  ProcedureDetails: string,
  ProcedureListDetails: string,
  ControlAssessmentAddEdit: string,
  ControlAssessmentList: string,
  ControlAssessmentNTAddEdit: string,
  ControlAssessmentNTList: string,
  TaskListForUser: string,
  AssetCategorization: string,
  Findings: string,
  FindingsList: string,
  PrimaryControlMasterList: string,
  PrimaryControlMasterAddEdit: string,
  PrimaryRisk: string,
  PrimaryControlMapping: string,
  ReturnOnInvestmentAddEdit: string,
  ReturnOnInvestmentList: string
  RiskAssessmentMainAddEdit: string,
  RiskAssessmentMainList: string,
  RiskAcceptanceList: string,
  RiskAcceptanceAddEdit: string
  RiskTreatmentAddEdit: string,
  RiskTreatmentlist: string,
  ThreatModel: string
  GraphUrl: string,
  RAquestionaire: string,
  RAquestionaireList: string,
  RAquestionaireAssessmntList: string,
  RAquestionaireAssessmntAddEdit: string,
  DashboardUser: string,
  DashboardRA: string,
  DashboardRAFrth: string,
  DashboardPolicy: string,
  DashboardKRI: string
  DashboardSecurityMarurity: string
  DashboardKPI: string,
  DashboardProject: string,
  PrimaryRiskMapping: string,
  DataFlow: string,
  DataPrivacy: string

} = {
  authenticateURL: 'Login',
  moduleListURL: 'Master/sideMenu',
  sideMenuURL: 'Master/',
  permissionListURL: 'Role_Config/BindTree/',
  permissionUpdateURL: 'Role_Config/saveMenuList',
  permissionEditURL: 'Role_AddEdit/',
  // permissionListEditURL: 'Role_AddEdit',
  threatListURL: 'ThreatList/getThreatList',
  riskActivitiesListURL: 'RiskActivitiesList/',
  riskActivitiesAddEditURL: 'RiskActivitiesAddEdit/',
  strategyListURL: 'StrategyList/',
  strategyAddEditURL: 'StrategyAddEdit/',
  riskEventsListURL: 'RiskEventList/',
  riskEventsAddEditURL: 'RiskEventAddEdit/',
  goalsListURL: 'GoalList/',
  kpiURL: 'KPI/',
  goalsAddEditURL: 'GoalAddEdit/',
  pageLog: 'Login/',
  subEventsListURL: 'SubEventsList/',
  subEventsAddEditURL: 'SubEventsAddEdit/',
  resourceAddEditURL: 'ResourceAddEditList/',
  losssEventURL:'lossEvent/',
  threatDeleteURL: 'ThreatList/',
  assetListURL: 'Asset/getAssetList',
  assetAddEditURL: 'AssetAddEdit/',
  assetAddEdit_SWURL: 'AssetAddEditSW/',
  assetAddEdit_BAURL: 'AssetAddEditBA/',
  assetAddEdit_InfoURL: 'AssetAddEditInfo/',
  assetAddEdit_PeopleURL: 'AssetAddEditPeople/',
  assetAddEdit_Doc: 'AssetAddEditDoc/',
  assetAddEdit_BSURL: 'Asset_AddEditBS/',
  assetListDelteURL: 'Asset/delete',
  tvPairsListURL: 'Threat_Vulnerability_Mapping/BindTVPairs',
  tvPairsEditURL: 'Threat_Vulnerability_Mapping/',
  industryStandardListURL: 'IndustryStandardsList/',
  industryStandardAddEditURL: 'IndustryStandardsAddEdit/',
  costBenefitAnalysisListURL: 'CostBenefitAnalysisList/',
  costBenefitAnalysisAddEditURL: 'CostBenefitAnalysisAddEdit/',
  tvPairsDeleteURL: 'Threat_Vulnerability_Mapping/deleteListItem',
  arToAsset: 'RiskAssessment/getAssetRiskList',
  aaToAsset: 'RiskAssessment/getRiskToAsetCatList/',
  arToAssetEditURL: 'AssetRisk_AddEdit/',
  manageRole: 'Roles_List/getRoles_List',
  deleteRole: 'Roles_List/delete',
  manageUserListURL: 'Administration/getUserList/',
  manageUserAddEditURL: 'User_AddEdit/',
  managUserLocationListURL: 'UserLocationList/',
  entityListURL: 'AssetLocationList/getAssetLocationList/',
  entityListDeleteURL: 'AssetLocationList/deleteListItem',
  entityLAddEditURL: 'AssetLocation_AddEdit/',
  managAssetLocationURL: 'AssetLocation_List/',
  rtpListURL: 'Control/',
  threatEditURL: 'Threat_AddEdit/BindThreatDetails/',
  dashBoardUrl: 'DashBoard/PageLoad/',
  assetGrpingAddEditURL: 'assetGrping/',
  assetGrpingListURL: 'AssetGroupingList/',
  controlListURL: 'ControlList/',
  RM_controlIndentificationAddEdit: 'CntrlIdentificationAddEdit/',
  threatSaveURL: 'Threat_AddEdit/SaveThreat',
  vulerabilityListURL: 'Vulnerability/getVulnerabilityList',
  cbaListURL: 'RiskTreatmentPlan/',
  vulnerabilityEditURL: 'api/Vulnerability_AddEdit',
  vulnerabilitySaveURL: 'api/Vulnerability_AddEdit',
  fileUploadUrl: 'FileUpload/',
  vulnerabilityDeletetURL: 'Vulnerability/',
  report_riskRegUrl: 'RiskRegisterReport/',
  report_assetRegUrl: 'AssetRegisterReport/',
  report_HWassetRegUrl: 'HardwareAssetReport/',
  report_ProjectReportUrl: 'ProjectReport/',
  report_EntityDetailsUrl: 'EntityDetails/',
  report_ControlsUnAssociatedToRisksUrl: 'ControlsUnAssociatedToRisks/',
  report_UnUsedControlsReportUrl: 'UnUsedControlsReport/',
  report_VulnerabilitieswithMissingThreatsUrl: 'VulnerabilitieswithMissingThreats/',
  report_ThreatsWithMissingVulnerabilitesUrl: 'ThreatsWithMissingVulnerabilites/',
  report_RiskUnAssociatedToControlsUrl: 'RiskUnAssociatedToControls/',
  report_UnUsedRisksReportUrl: 'UnUsedRisksReport/',
  report_AssetsNotMappedToControlsUrl: 'AssetsNotMappedToControls/',
  report_TopRisksRegisterUrl: 'TopRisksRegister/',
  report_AssetsAndUsersUrl: 'AssetsAndUsers/',
  report_RTPUrl: 'RTPReport/',
  report_SWassetRegUrl: 'SoftwareAssetReport/',
  report_BappAssetUrl: 'BAppAssetReport/',
  report_ControlDetailsReportUrl: 'ControlDetails/',
  report_TVControlModelUrl: 'TVControlReport/',
  report_TVMappingReportlUrl: 'TVMappingReport/',
  report_InfoAssetUrl: 'InformationAssetReport/',
  report_DocRegUrl: 'DocumentRegister/',
  report_AssetControlRiskMapping: 'AssetControlRiskMapping/',
  valuationQuantitativeUrl: 'Valuation_Quantitative/',
  valuationQualitativeUrl: 'ValuationQualitative/',
  assetControl_Mapping: 'AssetControl_Mapping/',
  assetClassification: 'Asset_Classification/',
  report_QuantitativeAssetValuationUrl: 'QuantitativeAssetValuation/',
  report_QualitativeAssetValuation: 'QualitativeAssetValuation/',
  OrganisationStructureAddEdit: 'OrganisationStructureAddEdit/',
  OrganisationStructureList: 'OrganisationStructureList/',
  BusinessProcess: 'BusinessProcess/',
  BusinessProcessList: 'BusinessProcessList/',
  WorkFlow: 'WorkFlow/',
  PolicyAddEdit: 'PolicyAddEdit/',
  PolicyList: 'PolicyList/',
  RMEventsAddEdit: 'RMEventsAddEdit/',
  RMEventsList: 'RMEventsList/',
  RMKRIList: 'KRIlist/',
  RMProjectsList: 'RMProjectsList/',
  RMProjectsAddEdit: 'RMProjectsAddEdit/',
  SecurityMaturity: 'SecurityMaturity/',
  KRIaddEdit: 'KRIaddEdit/',
  TasksAddEdit: 'TasksAddEdit/',
  TasksList: 'TasksList/',
  PlayBookAddEditList: 'PlayBookAdEditList/',
  ProcedureDetails: 'ProcedureDetailsAddEdit/',
  ProcedureListDetails: 'ProcedureDetailsList/',
  ControlAssessmentAddEdit: 'ControlAssessmentAddEdit/',
  ControlAssessmentList: 'ControlAssessmentList/',
  TaskListForUser: 'TaskListForUser/',
  ControlAssessmentNTAddEdit: 'ControlAssessmentNTAddEdit/',
  ControlAssessmentNTList: 'ControlAssessmentNTlist/',
  AssetCategorization: 'AssetCategorization/',
  Findings: 'FindingsAddEdit/',
  FindingsList: 'FindingsList/',
  PrimaryControlMasterList: 'PrimaryControlMasterList/',
  PrimaryControlMasterAddEdit: 'PrimaryControlMasterAddEdit/',
  PrimaryRisk: 'PrimaryRisk/',
  PrimaryControlMapping: 'PrimaryControlMapping/',
  ReturnOnInvestmentAddEdit: 'ReturnOnInvestmentAddEdit/',
  ReturnOnInvestmentList: 'ReturnOnInvestmentList/',
  RiskAssessmentMainAddEdit: 'RiskAssessmentMainAddEdit/',
  RiskAssessmentMainList: 'RiskAssessmentMainList/',
  RiskAcceptanceList: 'RiskAcceptanceList/',
  RiskAcceptanceAddEdit: 'RiskAcceptanceAddEdit/',
  RiskTreatmentAddEdit: 'RiskTreatmentAddEdit/',
  RiskTreatmentlist: 'RiskTreatmentList/',
  ThreatModel: 'GraphXmlSave/',
  GraphUrl: 'graph/javascript/examples/grapheditor/www/',
  RAquestionaire: 'RAQuestionnaire/',
  RAquestionaireList: 'RAQuestionnaireList/',
  RAquestionaireAssessmntList: 'RAQuestionnaireAssessmentList/',
  RAquestionaireAssessmntAddEdit: 'RAQuestionnaireAssessmentAddEdit/',
  DashboardUser: 'DashboardUser/',
  DashboardRA: 'DashboardRiskAssessment/',
  DashboardRAFrth: 'DashboardRiskAssessmentFourth/',
  DashboardPolicy: 'DashboardPolicy/',
  DashboardKRI: 'DashboardKRIEvents/',
  DashboardKPI: 'DashboardKPI/',
  DashboardProject: 'DashboardProjects/',
  DashboardSecurityMarurity: 'DashboardSecurityMaturity/',
  PrimaryRiskMapping: 'PrimaryRiskMapping/',
  DataFlow: 'DataFlow/',
  DataPrivacy: 'DataPrivacyAddEditList/'
};

// DEV - VM
// export let baseURL: string = "../services/";
// export let baseURL = 'http://10.0.1.5:8081/services/';

////// Localhost PORT - 51470
export let baseURL = 'http://localhost:52930/';
// 
// Use the following command while deploying to production
// ** ng build --prod --base-href /baseDirectoryPath/
// ** Sets base tag href to /baseURL/ in your index.html
// export let baseDirectoryPath = '/snym/';

//npm run build-prod

export let sessionWarningInterval = 60 * 25;
export let sessionTimeoutInterval = 60 * 30;
export let compInstance = {
  standardControls: null,
  assetCategorization: null,
  primaryControlMapping: null,
  primaryRiskMapping: null
};


