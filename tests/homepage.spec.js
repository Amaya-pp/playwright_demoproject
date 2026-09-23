const {test,expect}=require('@playwright/test')
const homepage = require('../Pages/homepage')

//Testcase 1: Search using vaild US city

test('HomeScout site launch and search property using US city', async ({page})=>
{
    const obj=new homepage(page)
    await obj.accessurl()
    await expect (page).toHaveTitle('HomeScout | Property Listings')
    await obj.citySearch()
    await obj.clickSearch()
    await expect (page.locator('#summary')).toHaveText('Showing 3 properties')

}) 

//Testcase 2: Search using vaild ZIP Code

test('HomeScout site launch and search property using zip code', async ({page})=>
{
    const obj=new homepage(page)
    await obj.accessurl()
    await expect (page).toHaveTitle('HomeScout | Property Listings')
    await obj.zipSearch()
    await obj.clickSearch()
    await expect (page.locator('#summary')).toHaveText('Showing 1 properties')

})     

//Testcase 3: Search property using property types House 

test('HomeScout site launch and search house property', async ({page})=>
{
    const obj=new homepage(page)
    await obj.accessurl()
    await expect (page).toHaveTitle('HomeScout | Property Listings')
    await obj.homeSearch()
    await obj.clickSearch()
    await expect (page.locator('#summary')).toHaveText('Showing 3 properties')

}) 

//Testcase 4: Search property using no.of bedrooms 

test('HomeScout site launch and search 2+ beds property', async ({page})=>
{
    const obj=new homepage(page)
    await obj.accessurl()
    await expect (page).toHaveTitle('HomeScout | Property Listings')
    await obj.bedsSearch()
    await obj.clickSearch()
    await expect (page.locator('#summary')).toHaveText('Showing 5 properties')

}) 

//Testcase 5: Search property using price range 

test('HomeScout site launch and sort based on property price', async ({page})=>
{
    const obj=new homepage(page)
    await obj.accessurl()
    await expect (page).toHaveTitle('HomeScout | Property Listings')
    await obj.sortSearch()
    await obj.clickSearch()
    await expect (page.locator('#summary')).toHaveText('Showing 6 properties')

}) 
//Testcase 6: Search property using multiple options 

test('Search property using multiple options', async ({page})=>
{
    const obj=new homepage(page)
    await obj.accessurl()
    await expect (page).toHaveTitle('HomeScout | Property Listings')
    await obj.citySearch()
    await obj.sortSearch()
    await obj.clickSearch()
    await expect (page.locator('#summary')).toHaveText('Showing 3 properties')

}) 
//Testcase 7: Search property using invalid options 

test('Search property using invalid options', async ({page})=>
{
    const obj=new homepage(page)
    await obj.accessurl()
    await expect (page).toHaveTitle('HomeScout | Property Listings')
    await obj.invalidOption()
    await obj.clickSearch()
    await expect (page.locator('#summary')).toHaveText('Showing 0 properties')

}) 
//Testcase 8: Verify save functionality 

test.only('Verify save functionality ', async ({page})=>
{
    const obj=new homepage(page)
    await obj.accessurl()
    await expect (page).toHaveTitle('HomeScout | Property Listings')
    await obj.clickSave()
    await expect (page.locator('#savedCount')).toHaveText('Saved: 1')
     await obj.clickSave()
    await expect (page.locator('#savedCount')).toHaveText('Saved: 1')

}) 

//Testcase 9: Verify property detailed view 

test('Verify property detailed view', async ({page})=>
{
    const obj=new homepage(page)
    await obj.accessurl()
    await expect (page).toHaveTitle('HomeScout | Property Listings')
    await obj.clickViewDetails()
    await obj.enterDetails()
     await expect (page.locator('#toast')).toHaveText('Please complete all fields')

}) 

//Testcase 10: Verify the search is not case-sensitive 

test('Verify the search is not case-sensitive.', async ({page})=>
{
    const obj=new homepage(page)
    await obj.accessurl()
    await expect (page).toHaveTitle('HomeScout | Property Listings')
    await obj.caseSensitiveSearch()
    await obj.clickSearch()
    await expect (page.locator('#summary')).toHaveText('Showing 1 properties')

}) 

