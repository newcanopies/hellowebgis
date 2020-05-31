# A shiny app - the code outside of the ui and server
# will only run once on setup.

library(shiny)
library(sp) #install.packages('sp')
library(sf) #install.packages('sf')

# Load the map data
brexit <- st_read("data/britain_eu_ref.shp")

# Define UI for application that draws a histogram
ui <- fixedPage(
  # many layout options are possible: https://shiny.rstudio.com/articles/layout-guide.html
  
  fixedRow(
      column(12,
      # Application title
      titlePanel("UK 2016 EU referendum results"),
            
        fixedRow(
          column(12,
            # Sidebar with a slider input for number of bins 
            sidebarLayout(
            sidebarPanel(
            # other button types: https://shiny.rstudio.com/tutorial/written-tutorial/lesson3/
            radioButtons("radio", h3("Display value:"), choices = list("Turnout %" = "Pct_Turnou", "Remain %" = "Pct_Remain", "Leave %" = "Pct_Leave"), selected = "Pct_Turnou"),
            plotOutput("valueHist", height = "400px"),
            
              fixedRow(
               
                      
                column(10,
                  ## <a href="https://newcanopies.github.io/hellowebgis/website/index.html">newcanopies</a> 
                  "Back to", tags$a(href="https://newcanopies.github.io/hellowebgis/website/index.html", "newcanopies"),
              )
             
          )
        ),
          column(width = 12,
            # Show a plot of the generated distribution
            mainPanel(
              plotOutput("brexitPlot", height="600px")
            )
          )
        )
      )
    )
  )
)
)
sidebarPanel(
tags$a(href="https://newcanopies.github.io/hellowebgis/website/index.html", "newcanopies")
)

# Define server logic required to draw a histogram
server <- function(input, output) {
  # margins
  
   output$brexitPlot <- renderPlot({
    par(mar=c(0,0,0,0), bg='lightgrey')
     plot(brexit[ ,input$radio], main="")
   })
   
   output$valueHist <- renderPlot({
     par(mar=c(5,5,3,1))
     hist(brexit[[input$radio]], main="Histogram", xlab=input$radio)
   })
}

# Run the application 
shinyApp(ui = ui, server = server)

