class homepage
{
    constructor(page)
    {
        this.page=page
        this.propertysearchfield=page.locator('#search')
        this.searchbutton=page.locator('#searchBtn')
        this.propertydropdown= page.locator('#type')
        this.bedsdropdown= page.locator('#beds')
        this.sortdropdown= page.locator('#sort')
        this.savebutton=page.locator('//button[@onclick="save(3)"]')
        this.viewDetailsbutton=page.locator('//button[@onclick="openViewing(1)"]')
        this.enterName= page.locator  ('#name')
        this.enterEmail=page.locator  ('#email')
        this.viewSubmitButton= page.locator  ('#submitViewing')

    }

async accessurl()
{
     await this.page.goto("https://dancing-kringle-4ac7b0.netlify.app/") 
}
async citySearch ()
{
    await this.propertysearchfield.fill('Austin')
    return this

}
async caseSensitiveSearch ()
{
    await this.propertysearchfield.fill('SeAtTle')
    return this

}

async zipSearch ()
{
    await this.propertysearchfield.fill('98101')
    return this

}
async homeSearch ()
{
    
    await this.propertydropdown.click()
    await this.propertydropdown.selectOption({index:1})
    return this

}
async bedsSearch ()
{
    
    
    await this.bedsdropdown.click()
    await this.bedsdropdown.selectOption({value:'2'})
    return this

}

async sortSearch ()
{
    
  
    await this.sortdropdown.click()
    await this.sortdropdown.selectOption({label:'Price: High to Low'})
    return this

}
async invalidOption()
{
    await this.propertysearchfield.fill('Austin')
    await this.propertydropdown.click()
    await this.propertydropdown.selectOption({index:2})
    return this

}
async clickSave()
{
    await this.savebutton.click()
    return this

}
async clickSearch ()
{
    await this.searchbutton.click()
    return this

}
async clickViewDetails ()
{
    await this.viewDetailsbutton.click()
    
    return this

}
async enterDetails ()
{
    
    await this.enterName.fill('ashna')
    await this.enterEmail.fill('ash@gmail.com')
     await this.viewSubmitButton.click()
    return this

}



}
module.exports=homepage
