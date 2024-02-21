"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[848],{6848:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrap"},[e._m(0),e._m(1),t("div",{staticClass:"mtit mt10"},[e._m(2),t("el-divider"),t("div",{staticClass:"f"},[e._m(3),t("p",[e._v("For example, you can highlight the Adult Brain integrative UMAP of the Brain Cell Atlas from multiple dimensions:")]),e._m(4),t("br"),t("br"),e._m(5),t("p",[e._v("A list of selectable attributes to display the UMAPs are shown in the left column. ")]),t("el-table",{staticClass:"level-table mt10",attrs:{data:e.dataViewerData}},[t("el-table-column",{attrs:{label:"Name",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticClass:"level-table-span",domProps:{innerHTML:e._s(a.row.name)}})]}}])}),t("el-table-column",{attrs:{label:"Description"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticClass:"level-table-span",domProps:{innerHTML:e._s(a.row.desc)}})]}}])})],1),t("br"),e._m(6),e._m(7),e._m(8)],1)],1),t("div",{staticClass:"mtit mt10"},[e._m(9),t("el-divider"),e._m(10),t("div",{staticClass:"t1"},[e._v("Users can:")]),e._m(11),e._m(12),e._m(13),t("el-table",{staticClass:"level-table mt10",attrs:{data:e.levelData}},[t("el-table-column",{attrs:{prop:"Level1",label:"Level1"}}),t("el-table-column",{attrs:{label:"Level2"},scopedSlots:e._u([{key:"default",fn:function(a){return e._l(a.row.Level2,(function(a){return t("span",{key:a,staticClass:"level-table-span"},[e._v(e._s(a)),t("br")])}))}}])}),t("el-table-column",{attrs:{label:"Level3"},scopedSlots:e._u([{key:"default",fn:function(a){return e._l(a.row.Level3,(function(a){return t("span",{key:a,staticClass:"level-table-span"},[e._v(e._s(a)),t("br")])}))}}])})],1)],1),t("div",{staticClass:"mtit mt10"},[e._m(14),t("el-divider"),e._m(15),e._m(16),e._m(17),e._m(18),e._m(19),e._m(20),e._m(21),t("div",{staticClass:"t1"},[e._v("Region DEG")]),e._m(22),e._m(23),e._m(24),t("div",{staticClass:"t1"},[e._v("CellType DEG")]),e._m(25)],1),t("div",{staticClass:"mtit mt10"},[e._m(26),t("el-divider"),e._m(27),e._m(28),e._m(29),e._m(30),e._m(31)],1),t("div",{staticClass:"mtit mt10",attrs:{id:"Datasets"}},[e._m(32),t("el-divider"),e._m(33)],1),t("div",{staticStyle:{height:"70px"}})])},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"title"},[t("ul",[t("li",[t("a",{attrs:{id:"TData Viewer",href:"#Data Viewer"}},[e._v("Data Viewer")])]),t("li",[t("a",{attrs:{id:"TPortrait",href:"#Portrait"}},[e._v("Portrait")])]),t("li",[t("a",{attrs:{id:"TGenes",href:"#Genes"}},[e._v("Genes")])]),t("li",[t("a",{attrs:{id:"TCell Sorting",href:"#Cell Sorting"}},[e._v("Cell Sorting")])]),t("li",[t("a",{attrs:{id:"TDatasets",href:"#Datasets"}},[e._v("Datasets")])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"mtit"},[t("div",{staticClass:"f"},[t("p",[e._v("Brain Cell Atlas is a comprehensive and unified atlas of the brain that was built across studies, regions, diseases and sequencing platforms. We integrated the majority of the single-nuclei/single-cell transcriptomic datasets published from 2016 to present from a diverse source of human brain samples that provide a unified cell type and manually curated metadata annotated framework for brain cell research in health, disease as well as in the development.")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"t"},[t("a",{attrs:{id:"Data Viewer",href:"#TData Viewer"}},[e._v(" Data Viewer ")]),t("span",{staticStyle:{"font-size":"14px"}},[e._v("  Click to the top")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("The data viewer utilises the "),t("a",{attrs:{href:"https://cellxgene.cziscience.com"}},[e._v("cellxgene")]),e._v(" module that displays the integrative UMAPs of the Adult Brain, Fetal Brain, Tumour and Organoids in the Brain Cell Atlas.")])},function(){var e=this,t=e._self._c;return t("div",{attrs:{align:"left"}},[t("img",{staticStyle:{"max-width":"75%"},attrs:{src:a(8942),alt:""}})])},function(){var e=this,t=e._self._c;return t("p",[t("b",[e._v("(1)")]),e._v(" By clicking on the water drop icon, you can view coloured cells from a certain brain region of interest by scrolling down the "),t("b",[e._v("region")]),e._v(" and the "),t("b",[e._v("subregion")]),e._v(" tab on the left side of the cellxgene module. Several other dimiensions to view the UMAP are described as below:")])},function(){var e=this,t=e._self._c;return t("p",[t("b",[e._v("(2)")]),e._v(" There are two main types of cell type annotations: original cell type annotations and cell type annotations via label transfer.")])},function(){var e=this,t=e._self._c;return t("ul",{staticClass:"f users-can mt10"},[t("li",[e._v(" Original cell type anotations are author provided cell type names if available from the public source, there is "),t("b",[e._v("original_name")]),e._v(", the cell type name and "),t("b",[e._v("original_name2")]),e._v(", the sub cell type name. Not all the cells have a author provided cell type classification label. ")]),t("li",[e._v(" Cell type annotations via label transfer. These are cell type names transfered from a well-annotated adult human brain snRNA dataset ("),t("a",{attrs:{href:"https://www.science.org/doi/10.1126/science.add7046"}},[e._v("Siletti et al., 2023")]),e._v(") and the fetal human brain scRNA resource ("),t("a",{attrs:{href:"https://www.science.org/doi/10.1126/science.adf1226"}},[e._v("Braun et al., 2023")]),e._v('). Label transfered cell type names are "Siletti_method" or "Braun_method" based on the '),t("a",{attrs:{href:"#Markers"}},[t("b",[e._v("machine-learning methods")])]),e._v(" used. ")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("You can find more detailed usages of the module from "),t("a",{attrs:{href:"https://cellxgene.cziscience.com/docs/01__CellxGene"}},[e._v("cellxgene's documentation")]),e._v(".")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"t"},[t("a",{attrs:{id:"Portrait",href:"#TPortrait"}},[e._v(" Portrait ")]),t("span",{staticStyle:{"font-size":"14px"}},[e._v("  Click to the top")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"f"},[t("p",[e._v("The interactive viewer shows the adult human brain and includes all the major regions from the data used in Brain Cell Atlas.")]),t("div",{attrs:{align:"center"}},[t("img",{staticStyle:{"max-width":"75%"},attrs:{src:a(1476),alt:""}})])])},function(){var e=this,t=e._self._c;return t("p",[t("b",[e._v("(1)")]),e._v(" "),t("i",[e._v("Move")]),e._v(" the mouse onto the text labels and read a brief introduction of the region from the Wikipedia site below the portrait. ")])},function(){var e=this,t=e._self._c;return t("p",[t("b",[e._v("(2)")]),e._v(" "),t("i",[e._v("Click")]),e._v(" on the text labels or click a brain region graphic to jump to "),t("a",{attrs:{href:"#Cell Sorting"}},[e._v("Cell Sorting")]),e._v(" to see all the corresponding cell information. ")])},function(){var e=this,t=e._self._c;return t("ul",{staticClass:"f users-can mt10"},[t("li",[e._v(" There are three anatomical levels appeared in the interactive viewer. ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"t"},[t("a",{attrs:{id:"Genes",href:"#TGenes"}},[e._v(" Genes ")]),t("span",{staticStyle:{"font-size":"14px"}},[e._v("  Click to the top")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"t1"},[t("a",{attrs:{id:"Markers"}},[e._v(" Markers ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"f"},[t("p",[e._v("Users can obtain a list of differentially expressed genes of the cell types from a selected brain region and the list is available for download in csv or pdf formats.")]),t("p",[e._v("The cell type name is defined by the most scored prediced cell type computed from the 8 machine-learning-based annotation methods:")])])},function(){var e=this,t=e._self._c;return t("ul",{staticClass:"f users-can"},[t("li",[t("a",{attrs:{href:"https://doi.org/10.1093/bioinformatics/btz592"}},[e._v("ACTINN")])]),t("li",[t("a",{attrs:{href:"10.1093/nar/gkz543"}},[e._v("CHETAH")])]),t("li",[t("a",{attrs:{href:"https://www.nature.com/articles/s41587-021-01001-7"}},[e._v("scArches")])]),t("li",[t("a",{attrs:{href:"https://doi.org/10.1038/nmeth.4644"}},[e._v("ScMap")])]),t("li",[t("a",{attrs:{href:"https://doi.org/10.1186/s13059-019-1862-5"}},[e._v("scPred")])]),t("li",[t("a",{attrs:{href:"https://doi.org/10.1016/j.cels.2019.06.004"}},[e._v("SingleCellNet")])]),t("li",[t("a",{attrs:{href:"https://doi.org/10.1038/s41590-018-0276-y"}},[e._v("SingleR")])]),t("li",[e._v(" scAnnot - a hierarchical classification model trained based on scANVI. ")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("For example, choosing an atlas to start with (Adult is shown here), and compute for candidate markers within a specific region by selecting the tab "),t("b",[e._v("By Region")]),e._v(" or find candidate markers of a cell type by selecting the tab "),t("b",[e._v("By CellType")]),e._v(". After selection and click on the tab "),t("b",[e._v("Markers")]),e._v(", a volcano plot will be shown and list of candidate markers are listed in the table available for downlod in pdf or csv format.")])},function(){var e=this,t=e._self._c;return t("div",{attrs:{align:"center"}},[t("img",{staticStyle:{"max-width":"75%"},attrs:{src:a(6695),alt:""}})])},function(){var e=this,t=e._self._c;return t("div",{attrs:{align:"center"}},[t("img",{staticStyle:{"max-width":"75%"},attrs:{src:a(7061),alt:""}})])},function(){var e=this,t=e._self._c;return t("div",{attrs:{align:"center"}},[t("img",{staticStyle:{"max-width":"75%"},attrs:{src:a(7964),alt:""}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"f"},[t("p",[e._v("Region DEG (Differential expression Genes) compares different cell types from the same region. A violin plot of the top 3 DEGs for each different cell types of the region will be shown after selection of the input.")])])},function(){var e=this,t=e._self._c;return t("div",{attrs:{align:"center"}},[t("img",{staticStyle:{"max-width":"75%"},attrs:{src:a(26),alt:""}})])},function(){var e=this,t=e._self._c;return t("div",{attrs:{align:"center"}},[t("img",{staticStyle:{"max-width":"75%"},attrs:{src:a(8875),alt:""}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"f"},[t("p",[e._v("CellType DEG compares the same cell type from different regions. Likewise, a violin plot of the top 3 DEGs for this cell type across different region will be shown after selection of the input.")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"t"},[t("a",{attrs:{id:"Cell Sorting",href:"#TCell Sorting"}},[e._v(" Cell Sorting ")]),t("span",{staticStyle:{"font-size":"14px"}},[e._v("  Click to the top")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"f"},[t("p",[e._v("The Cell Sorting function allows users to retrieve the cells by selections from the metadata or the gene features. More details on Cell Sorting can be found "),t("a",{attrs:{href:"https://www.sciencedirect.com/science/article/pii/S2666166722004695?via%3Dihub"}},[e._v("here.")])]),t("ul",{staticClass:"f users-can mt10"},[t("li",[e._v("All cells in uGT is the number of total cell count in cell sorting. ")]),t("li",[e._v("The two cicrular plots on the page shows the porportion of each anatomical regions and the cell type composition of the Brain Cell Atlas.")])])])},function(){var e=this,t=e._self._c;return t("div",{attrs:{align:"center"}},[t("img",{staticStyle:{"max-width":"75%"},attrs:{src:a(8117),alt:""}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"f"},[t("p",[e._v("Example:")]),t("p",[e._v("You can add filter to retrieve a specific cell type and analyse the proportions of regions where are these cells come from and analyse its transcriptomic expressions. ")])])},function(){var e=this,t=e._self._c;return t("div",{attrs:{align:"center"}},[t("img",{staticStyle:{"max-width":"75%"},attrs:{src:a(4883),alt:""}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"f"},[t("br"),t("p",[t("b",[e._v("(1)")]),e._v(' Click on the plus sign "+" to add a step. ')]),t("p",[t("b",[e._v("(2)")]),e._v(' Press the "'),t("b",[e._v("Add Filter")]),e._v('" button to select an attribute to retrieve relevant cells from Sub-atlas (Adult, Fetal, Tumour, Organoid), Gene or metadata (which contains the demographical, sample information and '),t("a",{attrs:{href:"#Markers"}},[e._v("label tranfered cell type annotations of the cells")]),e._v(").")]),t("p",[t("b",[e._v("(3)")]),e._v(' Scroll down to select attributes, for example: Metadata -> Cell Type -> Astrocyte. Press the "'),t("b",[e._v("Apply")]),e._v('" button to continue. This will return a circular plot on the lfet that shows the proportion of each anatomical regions that contain the astrocytes, and a total number of retrieved astrocytes below in the "'),t("b",[e._v("cell query language")]),e._v('" block.')]),t("p",[e._v("Further descriptins on Cell Sorting can be found "),t("a",{attrs:{href:"https://www.sciencedirect.com/science/article/pii/S2666166722004695?via%3Dihub#sec2"}},[e._v("here")]),e._v(".")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"t"},[t("a",{attrs:{id:"Datasets",href:"#TDatasets"}},[e._v(" Datasets ")]),t("span",{staticStyle:{"font-size":"14px"}},[e._v("  Click to the top")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"f"},[t("p",[e._v("The datasets page includes all the datasets used in the Brain Cell Atlas, a full list of the studies and authors from this page can be found "),t("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-EyAjwjJKCpwmAnUDTbKSAQ-yJSBHGJSej_jXxYiTjg/edit#gid=0"}},[e._v("here")]),e._v(". Processed data with re-annotated cell type metadata will be avaiable for download upon publication.")]),t("div",{attrs:{align:"center"}},[t("img",{staticStyle:{"max-width":"75%"},attrs:{src:a(9257),alt:""}})])])}],r={data(){return{levelData:[{Level1:"Cerebral cortex",Level2:["Frontal lobe"],Level3:["Prefrontal cortex"," Motor cortex"]},{Level1:"Cerebral cortex",Level2:["Parietal lobe"],Level3:["Somatosensory cortex"]},{Level1:"Cerebral cortex",Level2:["Occipital lobe","Temporal lobe","Cingulate cortex"]},{Level1:"Brainstem",Level2:["Midbrain","Pons","Medulla oblongata"]},{Level1:"Deep structures",Level2:["Amygdala","Basal ganglia","Hippocampus","Hypothalamus","Olfactory bulb","Pineal gland","Putamen","Thalamus"]},{Level1:"Corpus callosum"},{Level1:"Cerebellum"},{Level1:"Spinal cord"}],dataViewerData:[{name:"cell_ID",desc:"Cell barcode."},{name:"Seq_tech",desc:"Sequencing platforms used."},{name:"donor_ID",desc:"Author specified donor IDs, which are indicated in the original publications."},{name:"donor_gender",desc:"F = Female; M = Male; Unclassified = Unknown."},{name:"donor_age",desc:"For postnatal individuals, 6 months old is denoted by 6mo; 21 years old is denoted by “21yr”.<br/>\n                For prenatal individuals, 9w stands for 9 gestational weeks (GW). <br/>\n                For organoids, use d (days in culture) <br/>\n                Eg. 10d."},{name:"donor_status",desc:'Disease status of the sample is corresponding to common names appears in MONDO Diseased Ontology.<br/>\n                <a style="color:#034cca" href="https://bioportal.bioontology.org/ontologies/MONDO/?p=classes&conceptid=root">\n                https://bioportal.bioontology.org/ontologies/MONDO/?p=classes&conceptid=root\n                </a>'},{name:"orginal_name",desc:"Original cell type annotations provided by the author"},{name:"region",desc:"Anatomical structure level 1 (Please find details in the first table of the Help Page)."},{name:"subregion",desc:"Anatomical structure level 2 (Please find details in the first table of the Help Page)."},{name:"sample_status",desc:'Each cell\'s disease status corresponds to common names appearing in MONDO Diseased Ontology.<br/>\n                <a style="color:#034cca" href="https://bioportal.bioontology.org/ontologies/MONDO/?p=classes&conceptid=root">\n                https://bioportal.bioontology.org/ontologies/MONDO/?p=classes&conceptid=root\n                </a> '},{name:"treatment",desc:"The cell donor’s personal medical treatment, not individual cells, unless the cell source is from an organoid."},{name:"ethnicity",desc:"The ethnicity of the donor"},{name:"if_patient"},{name:"species",desc:"Homo sapiens<br/>\n                  Mus musculus"},{name:"sample_type",desc:"Adult, Fetal, Organoid, Tumour"},{name:"seq_method",desc:"snRNA-seq/scRNA-seq"},{name:"project_code",desc:"Project codes are the data accession codes or strings of abbreviation of the study provided the authors.<br/>\n                E.g., GSE/SCP/E-MTAB-/PRJNA/EGAS/phs/PRJEB/SDY/SRP"},{name:"sample_ID",desc:"If not from GSE, use author_year_samplename"},{name:"ACTINN<br/>\n                CHETAH<br/>\n                scArches<br/>\n                scmap<br/>\n                SingleR<br/>\n                ScPred<br/>\n                scArches<br/>\n                SingleCellNet<br/>\n                scAnnot",desc:"The putative cell types are calculated by each of the implemented machine-learning-based methods.<br/>\n          Siletti_ACTINN: The cell type annotation computed by the ACTINN algorithm using Siletti et al. as the reference."},{name:"reference",desc:"The doi of the publication. If there is no doi, a data retrieval link is provided or simply N/A."},{name:"sample",desc:"Samplename in the raw data"},{name:"original_name2",desc:"Sub cell type annotation provided by the author. ‘Unclassified’ if not provided"}]}},methods:{},mounted(){this.$nextTick((()=>{const e=this.$route.fullPath,t=e.split("#")[1];if(console.log(t),t){const e=document.getElementById(t);e.scrollIntoView()}}))}},n=r,l=a(6367),o=(0,l.A)(n,s,i,!1,null,"1d15255f",null),c=o.exports},26:function(e,t,a){e.exports=a.p+"BCAGitPages/img/help_figure_DEG.466d81e1.png"},8875:function(e,t,a){e.exports=a.p+"BCAGitPages/img/help_figure_DEG2.ec73a81f.png"},8117:function(e,t,a){e.exports=a.p+"BCAGitPages/img/help_figure_cellsorting.8980d6fa.png"},4883:function(e,t,a){e.exports=a.p+"BCAGitPages/img/help_figure_cellsorting2.8b94154a.png"},8942:function(e,t,a){e.exports=a.p+"BCAGitPages/img/help_figure_cellxgene.f56da8ef.png"},9257:function(e,t,a){e.exports=a.p+"BCAGitPages/img/help_figure_dataset.8426e62b.png"},6695:function(e,t,a){e.exports=a.p+"BCAGitPages/img/help_figure_marker.d128c34d.png"},7061:function(e,t,a){e.exports=a.p+"BCAGitPages/img/help_figure_marker2.9aa5ed98.png"},7964:function(e,t,a){e.exports=a.p+"BCAGitPages/img/help_figure_marker3.632598aa.png"},1476:function(e,t,a){e.exports=a.p+"BCAGitPages/img/help_figure_portrait.afa70777.png"}}]);